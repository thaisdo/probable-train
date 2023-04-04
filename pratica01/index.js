const root = document.getElementById('root');

const contatos = [
    {nome: "Contato1", fone: "555-555-555"},
    {nome: "Contato2", fone: "444-444-444"},
    {nome: "Contato3", fone: "222-222-222"},
  ];

function Titulo(nome) {
  const h2 = document.createElement("h2");
  h2.innerHTML = nome;
  return h2;
};

function InputText() {
  const InputText = document.createElement("input")
  InputText.setAttribute('type', 'text');
  InputText.setAttribute('name', 'nome');
  return InputText;
};

function InputTel() {
  const InputTel = document.createElement("input");
  InputTel.setAttribute('type', 'number');
  InputTel.setAttribute('name', 'fone');
  return InputTel;
};

function InputSubmit() {
  const InputSubmit = document.createElement("input")
  InputSubmit.setAttribute('type', 'submit');
  InputSubmit.setAttribute('value', 'Send');
  return InputSubmit;
};

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const contato = {};

  formData.forEach(function (value, key){
    contato[key] = value;
  });
  contatos.push(contatos);
  navegaPara("Meus Contatos");
};

function FormContato() {
  const form = document.createElement('form') 
    form.append(InputText());
    form.append(InputTel());
    form.append(InputSubmit());
    form.addEventListener('submit', handleSubmit);
  return form;
};

function ListaContato() {
  const table = document.createElement('table')
  contatos.forEach(function (contato) {
    const h3 = document.createElement('h3');
    h3.innerHTML = contato.nome;

    const h4 = document.createElement('h4');
    h4.innerHTML = contato.fone;

    const td = document.createElement('td');
    td.append(h3);
    td.append(h4);

    const tr = document.createElement('tr');
    tr.append(td);
    table.append(tr);
  });
  return table;
};

function MeusContatos() {
  root.append(Titulo('Meus Contatos'));
  root.append(ListaContato());
};

function NovoContato() {
  root.append(Titulo('Novo Contato'));
  root.append(FormContato());
};

function limpaConteudo() {
  const children = [...root.children];
  children.forEach(function (child){
    root.removeChild(child);
  });
}

function ativaLink(rota) {
  const links = document.querySelectorAll('a');
  links.forEach(function (link) {
    if (link.innerHTML === rota) {
      link.classList.add('ativo');
    } else {
      link.classList.remove('ativo');
    }
  });
}

function navegaPara(rota) {
  limpaConteudo();
  ativaLink(rota);
  if (rota === "Novo Contato")
    NovoContato()
  else
    MeusContatos();
}

function adicionaClickListener() {
  const links = document.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      navegaPara(link.innerHTML);
    });
  });
}
adicionaClickListener();
navegaPara('Meus Contatos');