# ⚖️ FitProgress

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white) ![Local Storage](https://img.shields.io/badge/Local_Storage-10b981?style=flat&logo=databricks&logoColor=white)

Um sistema web completo e responsivo para o acompanhamento de alta precisão da evolução corporal. Desenvolvido para facilitar o registo de pesagens, gerar cálculos biométricos automáticos de saúde (IMC e Peso Ideal) e manter os dados do utilizador 100% seguros e armazenados localmente no dispositivo.

---

## ✨ Funcionalidades

* 🔒 **Privacidade e Segurança:** Acesso restrito por utilizador e senha. Nenhum dado é enviado para a nuvem; tudo fica guardado de forma privada no `localStorage` do seu navegador.
* 📊 **Dashboard Intuitivo:** Visualização rápida do Peso Atual, IMC exato, Perda Total acumulada e estimativa do Peso Ideal Recomendado.
* ⚖️ **Balanças Dinâmicas (Gauges):** Indicadores visuais desenvolvidos à medida. O IMC é mapeado em 8 níveis de cores exatas (padrão OMS). A balança de peso atual indica instantaneamente se está na zona verde (saudável) ou vermelha.
* 📈 **Gestão de Lançamentos:** Registo simplificado de novas pesagens com data. O histórico calcula dinamicamente a variação (ganho ou perda) entre os registos.
* 🔄 **Backup e Restauro:** Controle total dos seus dados. Exporte todo o seu histórico em formato `.json` e restaure-o em qualquer dispositivo.

---

## 📐 Fórmulas e Precisão

* 🧬 **Fórmula de Lorentz:** O sistema não utiliza metas genéricas. O peso ideal é calculado cruzando os dados de **Altura**, **Idade** e **Sexo Biológico** informados no registo, fornecendo um alvo biológico realista.
* 🛡️ **Validação Rigorosa:** O campo de altura força o formato padrão (`1.70`) e o sistema auto-corrige dados corrompidos durante a importação de backups antigos.
* 🎯 **Tolerância Dinâmica:** A agulha da balança de peso avalia um raio de segurança em torno do seu peso ideal para definir as cores de alerta.

---

## 🚀 Como Executar

Como o projeto é construído em tecnologias web nativas (Vanilla JS), a execução é imediata e não requer a instalação de dependências complexas.

1. **Clone este repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/fitprogress.git](https://github.com/SEU_USUARIO/fitprogress.git)
