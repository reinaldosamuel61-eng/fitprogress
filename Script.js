// 1. Estado da Aplicação (Dados baseados na sua planilha)
const state = {
    currentPage: 'inicio',
    historico: [
        { data: '01/01', peso: 112.00 },
        { data: '21/03', peso: 101.65 },
        { data: '28/03', peso: 99.70 },
        { data: '04/04', peso: 98.50 },
        { data: '11/04', peso: 96.75 },
        { data: '18/04', peso: 95.60 },
        { data: '25/04', peso: 93.20 },
        { data: '02/05', peso: 92.70 },
        { data: '09/05', peso: 91.90 }
    ],
    usuario: {
        altura: 1.75, // Exemplo de altura para cálculo de IMC
        pesoAtual: 91.90
    }
};

// 2. Componentes (Templates)
const Components = {
    inicio: () => `
        <h1>Dashboard de Evolução</h1>
        <div class="dashboard">
            <div class="card">
                <h3>Peso Atual vs Meta</h3>
                <canvas id="gaugeChart"></canvas>
                <p style="text-align:center; font-weight:bold; margin-top:10px;">
                    IMC Atual: ${(state.usuario.pesoAtual / (state.usuario.altura ** 2)).toFixed(2)}
                </p>
            </div>
            <div class="card">
                <h3>Evolução de Peso (kg)</h3>
                <canvas id="evolutionChart"></canvas>
            </div>
        </div>
    `,
    sobre: () => `
        <div class="card">
            <h1>Sobre o Projeto</h1>
            <p>Esta SPA foi desenvolvida para monitoramento de saúde e bem-estar, transformando dados estáticos de planilhas em visualizações interativas.</p>
            <p><strong>Tecnologias:</strong> HTML5, CSS3, JavaScript ES6 e Chart.js.</p>
        </div>
    `,
    contato: () => `
        <div class="card">
            <h1>Contato</h1>
            <form id="contactForm" onsubmit="handleForm(event)">
                <div class="form-group">
                    <label>Nome:</label>
                    <input type="text" id="nome" required>
                    <span id="errNome" class="error">Mínimo de 3 caracteres</span>
                </div>
                <div class="form-group">
                    <label>E-mail:</label>
                    <input type="email" id="email" required>
                    <span id="errEmail" class="error">E-mail inválido</span>
                </div>
                <div class="form-group">
                    <label>Mensagem:</label>
                    <textarea id="mensagem" rows="4" required></textarea>
                </div>
                <button type="submit">Enviar Mensagem</button>
            </form>
        </div>
    `
};

// 3. Roteamento e Renderização
function render() {
    const app = document.getElementById('app');
    app.innerHTML = Components[state.currentPage]();
    
    if (state.currentPage === 'inicio') {
        initCharts();
    }
}

function navigate(page) {
    state.currentPage = page;
    render();
}

// 4. Lógica de Gráficos
function initCharts() {
    // Gráfico de Evolução (Linha)
    const ctxLine = document.getElementById('evolutionChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: state.historico.map(h => h.data),
            datasets: [{
                label: 'Peso (kg)',
                data: state.historico.map(h => h.peso),
                borderColor: '#2563eb',
                tension: 0.3,
                fill: true,
                backgroundColor: 'rgba(37, 99, 235, 0.1)'
            }]
        }
    });

    // Gráfico de "Balança" (Gauge de IMC)
    const imc = state.usuario.pesoAtual / (state.usuario.altura ** 2);
    const ctxGauge = document.getElementById('gaugeChart').getContext('2d');
    new Chart(ctxGauge, {
        type: 'doughnut',
        data: {
            labels: ['Saudável', 'Sobrepeso', 'Obesidade'],
            datasets: [{
                data: [25, 5, 10], // Segmentos do gauge
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
                needleValue: imc
            }]
        },
        options: {
            rotation: -90,
            circumference: 180,
            cutout: '70%',
            plugins: { legend: { display: false } }
        }
    });
}

// 5. Validação de Formulário
function handleForm(event) {
    event.preventDefault();
    let valid = true;
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    if (nome.length < 3) {
        document.getElementById('errNome').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('errNome').style.display = 'none';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('errEmail').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('errEmail').style.display = 'none';
    }

    if (valid) {
        alert('Formulário enviado com sucesso!');
        event.target.reset();
    }
}

// Inicialização
window.onload = render;