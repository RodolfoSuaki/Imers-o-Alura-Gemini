const institutions = [
    // Região Sudeste
    {
        name: "AACD",
        state: "São Paulo",
        description:
            "Especializada em reabilitação de pessoas com deficiência física.",
        areasOfAction: ["Saúde", "Reabilitação"],
        volunteering: "https://www.aacd.org.br/",
        contact: "(11) 9876-5432",
        tags: ["Saúde", "Deficiência Física", "Reabilitação"],
    },
    {
        name: "Hospital do Câncer de Barretos",
        state: "São Paulo",
        description: "Referência em tratamento oncológico no Brasil.",
        areasOfAction: ["Saúde", "Oncologia"],
        volunteering: "https://hospitaldeamor.com.br/",
        contact: "(16) 3313-6000",
        tags: ["Câncer", "Saúde"],
    },
    {
        name: "Instituto Atados",
        state: "Minas Gerais",
        description: "Promove o desenvolvimento social e a cidadania.",
        areasOfAction: ["Educação", "Desenvolvimento Social"],
        volunteering: "https://atados.org.br/",
        contact: "(31) 9876-5432",
        tags: ["Educação", "Desenvolvimento Social", "Voluntariado"],
    },
    {
        name: "SOS Crianças Brasil",
        state: "Rio de Janeiro",
        description:
            "Protege crianças e adolescentes em situação de vulnerabilidade.",
        areasOfAction: ["Crianças", "Proteção Social"],
        volunteering: "https://soscriancas.org.br/",
        contact: "(21) 9876-5432",
        tags: ["Crianças", "Proteção Social", "Voluntariado"],
    },
    {
        name: "Instituto Alana",
        state: "Rio de Janeiro",
        description: "Defende os direitos de crianças e adolescentes.",
        areasOfAction: ["Direitos Humanos", "Crianças"],
        volunteering: "https://alana.org.br/",
        contact: "(21) 9876-5432",
        tags: ["Direitos Humanos", "Crianças", "Advocacia"],
    },
    {
        name: "Instituto Península",
        state: "São Paulo",
        description: "Promove a inovação na educação.",
        areasOfAction: ["Educação", "Inovação"],
        volunteering: "https://institutopeninsula.org.br/",
        contact: "(11) 9876-5432",
        tags: ["Educação", "Inovação", "Aprendizagem"],
    },
    {
        name: "Graacc",
        state: "São Paulo",
        description:
            "Instituição de referência no tratamento de crianças e adolescentes com câncer.",
        areasOfAction: ["Saúde", "Crianças"],
        volunteering: "https://graacc.org.br/seja-voluntario/",
        contact: "(11) 3284-9500",
        tags: ["Câncer", "Crianças", "Saúde"],
    },
    {
        name: "Casa Ronald McDonald (SP)",
        state: "São Paulo",
        description:
            "Oferece hospedagem para famílias de crianças com doenças graves em tratamento.",
        areasOfAction: ["Saúde", "Apoio a Famílias"],
        volunteering: "https://www.casaronald.org.br/",
        contact: "(11) 1234-5678",
        tags: ["Saúde", "Crianças", "Famílias", "Hospedagem"],
    },

    // Região Nordeste
    {
        name: "GACC-BA",
        state: "Bahia",
        description: "Tratamento de crianças e adolescentes com câncer.",
        areasOfAction: ["Saúde", "Oncologia Infantil"],
        volunteering: "https://gacc-ba.org.br/",
        contact: "(71) 1234-5678",
        tags: ["Câncer", "Crianças", "Saúde"],
    },
    {
        name: "Instituto da Criança com Câncer (ICC)",
        state: "Pernambuco",
        description: "Atendimento integral a crianças e adolescentes com câncer.",
        areasOfAction: ["Saúde", "Oncologia Infantil"],
        volunteering: "https://icc.org.br/",
        contact: "(81) 9876-5432",
        tags: ["Câncer", "Crianças", "Saúde"],
    },
    {
        name: "Projeto Axé",
        state: "Bahia",
        description: "Promove o desenvolvimento social de crianças e adolescentes através da cultura e educação.",
        areasOfAction: ["Educação", "Cultura", "Desenvolvimento Social"],
        volunteering: "https://projetoaxe.org.br/",
        contact: "(71) 9876-5432",
        tags: ["Educação", "Cultura", "Crianças", "Desenvolvimento Social"],
    },
    {
        name: "Instituto Agreste",
        state: "Pernambuco",
        description: "Promove o desenvolvimento sustentável do semiárido.",
        areasOfAction: ["Meio Ambiente", "Desenvolvimento Sustentável", "Agricultura"],
        volunteering: "https://institutoagreste.org.br/",
        contact: "(81) 9876-5432",
        tags: ["Meio Ambiente", "Sustentabilidade", "Agricultura"],
    },
    {
        name: "Instituto Alana",
        state: "Ceará",
        description: "Defende os direitos de crianças e adolescentes.",
        areasOfAction: ["Direitos Humanos", "Crianças"],
        volunteering: "https://alana.org.br/",
        contact: "(85) 9876-5432",
        tags: ["Direitos Humanos", "Crianças", "Advocacia"],
    },
    {
        name: "Instituto Natura",
        state: "Pernambuco",
        description: "Promove a sustentabilidade e o bem-estar social.",
        areasOfAction: ["Sustentabilidade", "Bem-estar Social"],
        volunteering: "https://www.natura.com.br/institucional/instituto-natura",
        contact: "(81) 9876-5432",
        tags: ["Sustentabilidade", "Bem-estar", "Meio Ambiente"],
    },
    {
        name: "GACC-BA",
        state: "Bahia",
        description: "Tratamento de crianças e adolescentes com câncer.",
        areasOfAction: ["Saúde", "Oncologia Infantil"],
        volunteering: "https://gacc-ba.org.br/",
        contact: "(71) 1234-5678",
        tags: ["Câncer", "Crianças", "Saúde"],
    },
    {
        name: "Instituto da Criança com Câncer (ICC)",
        state: "Pernambuco",
        description: "Atendimento integral a crianças e adolescentes com câncer.",
        areasOfAction: ["Saúde", "Oncologia Infantil"],
        volunteering: "https://icc.org.br/",
        contact: "(81) 9876-5432",
        tags: ["Câncer", "Crianças", "Saúde"],
    },

    // Região Norte
    {
        name: "Hospital de Amor de Barretos - Amazonas",
        state: "Amazonas",
        description: "Tratamento de câncer e outras doenças.",
        areasOfAction: ["Saúde", "Oncologia"],
        volunteering: "https://hospitaldeamor.com.br/",
        contact: "(92) 1234-5678",
        tags: ["Câncer", "Saúde", "Amazonas"],
    },
    {
        name: "Fundação Amazonas Sustentável",
        state: "Amazonas",
        description: "Promove o desenvolvimento sustentável da Amazônia.",
        areasOfAction: ["Meio Ambiente", "Sustentabilidade"],
        volunteering: "https://fas.org.br/",
        contact: "(92) 9876-5432",
        tags: ["Meio Ambiente", "Sustentabilidade", "Amazonas"],
    },
    {
        name: "Instituto Socioambiental (ISA)",
        state: "Amazonas",
        description: "Defende os direitos indígenas e promove a conservação ambiental.",
        areasOfAction: ["Meio Ambiente", "Direitos Indígenas"],
        volunteering: "https://www.socioambiental.org/",
        contact: "(61) 9876-5432",
        tags: ["Meio Ambiente", "Indígenas", "Amazonas"],
    },
    {
        name: "SOS Amazônia",
        state: "Acre",
        description: "Atua na conservação da Amazônia e na promoção do desenvolvimento sustentável.",
        areasOfAction: ["Meio Ambiente", "Conservação"],
        volunteering: "https://sosamazonia.org.br/",
        contact: "(68) 9876-5432",
        tags: ["Meio Ambiente", "Conservação", "Amazônia"],
    },
    {
        name: "Instituto Mamirauá",
        state: "Amazonas",
        description: "Realiza pesquisas científicas e ações de conservação na região do Médio Solimões.",
        areasOfAction: ["Ciência", "Conservação", "Meio Ambiente"],
        volunteering: "https://mamiraua.org.br/",
        contact: "(97) 9876-5432",
        tags: ["Ciência", "Meio Ambiente", "Amazonas"],
    },

    // Região Centro-Oeste
    {
        name: "Hospital do Câncer de Goiânia",
        state: "Goiás",
        description: "Tratamento especializado em câncer.",
        areasOfAction: ["Saúde", "Oncologia"],
        volunteering: "https://hospitaldocancer.com.br/",
        contact: "(62) 9876-5432",
        tags: ["Câncer", "Saúde", "Goiás"],
    },
    {
        name: "Hospital do Coração de Brasília",
        state: "Distrito Federal",
        description: "Referência em cardiologia e doenças cardiovasculares.",
        areasOfAction: ["Saúde", "Cardiologia"],
        volunteering: "https://www.hcdf.org.br/",
        contact: "(61) 9876-5432",
        tags: ["Saúde", "Cardiologia", "Brasília"],
    },
    {
        name: "Instituto Atados",
        state: "Minas Gerais",
        description: "Promove o desenvolvimento social e a cidadania.",
        areasOfAction: ["Educação", "Desenvolvimento Social"],
        volunteering: "https://atados.org.br/",
        contact: "(31) 9876-5432",
        tags: ["Educação", "Desenvolvimento Social", "Voluntariado"],
    },
    {
        // Adaptado para a região Centro-Oeste
        name: "Instituto do Pantanal",
        state: "Mato Grosso do Sul",
        description: "Conservação e pesquisa do Pantanal.",
        areasOfAction: ["Meio Ambiente", "Conservação"],
        volunteering: "https://www.institutodopantanal.org.br/",
        contact: "(67) 9876-5432",
        tags: ["Meio Ambiente", "Pantanal", "Conservação"],
    },
    {
        name: "ONG Xingu",
        state: "Mato Grosso",
        description: "Proteção do bioma amazônico.",
        areasOfAction: ["Meio Ambiente", "Conservação"],
        volunteering: "https://www.ongxingu.org.br/",
        contact: "(65) 9876-5432",
        tags: ["Meio Ambiente", "Amazônia", "Conservação"],
    },
    {
        name: "Instituto Peabiru",
        state: "Mato Grosso do Sul",
        description: "Promove a justiça social e ambiental.",
        areasOfAction: ["Direitos Humanos", "Meio Ambiente"],
        volunteering: "https://www.peabiru.org.br/",
        contact: "(67) 9876-5432",
        tags: ["Direitos Humanos", "Meio Ambiente", "Sustentabilidade"],
    },

    // Região Sul
    {
        name: "Hospital de Clínicas de Porto Alegre",
        state: "Rio Grande do Sul",
        description: "Referência em diversas áreas da saúde, incluindo oncologia.",
        areasOfAction: ["Saúde", "Oncologia"],
        volunteering: "https://hcpa.edu.br/",
        contact: "(51) 3315-8000",
        tags: ["Saúde", "Oncologia", "Rio Grande do Sul"],
    },
    {
        name: "Hospital Pequeno Príncipe",
        state: "Paraná",
        description: "Referência em pediatria no Brasil.",
        areasOfAction: ["Saúde", "Pediatria"],
        volunteering: "https://www.pequenoprincipe.org.br/",
        contact: "(41) 3315-8000",
        tags: ["Saúde", "Pediatria", "Paraná"],
    },
    {
        name: "Hospital de Caridade de São Sebastião",
        state: "Santa Catarina",
        description: "Um dos mais antigos hospitais do Brasil, oferecendo diversos serviços de saúde.",
        areasOfAction: ["Saúde", "Geral"],
        volunteering: "https://hc-ss.org.br/",
        contact: "(48) 3315-8000",
        tags: ["Saúde", "Santa Catarina"],
    },
    {
        // Adaptado para a região Sul
        name: "Instituto Alana",
        state: "Santa Catarina",
        description: "Defende os direitos de crianças e adolescentes.",
        areasOfAction: ["Direitos Humanos", "Crianças"],
        volunteering: "https://alana.org.br/",
        contact: "(48) 9876-5432",
        tags: ["Direitos Humanos", "Crianças", "Advocacia"],
    },
    {
        name: "Instituto Rumo",
        state: "Rio Grande do Sul",
        description: "Promove a inclusão social e o desenvolvimento sustentável.",
        areasOfAction: ["Desenvolvimento Social", "Sustentabilidade"],
        volunteering: "https://institutorumo.org.br/",
        contact: "(51) 9876-5432",
        tags: ["Desenvolvimento Social", "Sustentabilidade", "Rio Grande do Sul"],
    },
    {
        name: "Instituto Pró-Carnes",
        state: "Paraná",
        description: "Promove a sustentabilidade na cadeia produtiva da carne.",
        areasOfAction: ["Meio Ambiente", "Sustentabilidade"],
        volunteering: "https://www.procarnes.org.br/",
        contact: "(41) 9876-5432",
        tags: ["Meio Ambiente", "Sustentabilidade", "Paraná"],
    },
];

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");

function createTableRow(institution) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const stateCell = document.createElement("td");
    const descriptionCell = document.createElement("td");
    const areasCell = document.createElement("td");
    const volunteerCell = document.createElement("td");
    const contactCell = document.createElement("td");
    const tagsCell = document.createElement("td");

    nameCell.textContent = institution.name;
    stateCell.textContent = institution.state;
    descriptionCell.textContent = institution.description;
    areasCell.textContent = institution.areasOfAction.join(", "); // Une as áreas de atuação com vírgulas
    volunteerCell.innerHTML = `<a href="${institution.volunteering}">Seja Voluntário</a>`; // Cria link para a página de voluntariado
    contactCell.textContent = institution.contact;
    tagsCell.textContent = institution.tags.join(", "); // Une as tags com vírgulas

    row.appendChild(nameCell);
    row.appendChild(stateCell);
    row.appendChild(descriptionCell);
    row.appendChild(areasCell);
    row.appendChild(volunteerCell);
    row.appendChild(contactCell);
    row.appendChild(tagsCell);

    tableBody.appendChild(row);
}

function search() {
    const searchTerm = searchInput.value.toLowerCase();
    tableBody.innerHTML = ""; // Limpa a tabela antes de preencher

    institutions.forEach((institution) => {
        if (
            institution.name.toLowerCase().includes(searchTerm) ||
            institution.state.toLowerCase().includes(searchTerm) ||
            institution.description.toLowerCase().includes(searchTerm) ||
            institution.areasOfAction.join(" ").toLowerCase().includes(searchTerm) ||
            institution.tags.join(" ").toLowerCase().includes(searchTerm)
        ) {
            // Busca em todas as propriedades
            createTableRow(institution);
        }
    });
}

// Preencher a tabela inicialmente
institutions.forEach(createTableRow);
