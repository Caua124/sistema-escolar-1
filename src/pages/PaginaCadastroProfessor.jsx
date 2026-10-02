import FormularioProfessor from "../components/FormularioProfessor";

function PaginaCadastro(props) {
  return (
    <div className="pagina-cadastro">
      <h2>Cadastrar professor</h2>
      <FormularioProfessor aoSalvar={props.aoSalvar} />
    </div>
  );
}

export default PaginaCadastro;
