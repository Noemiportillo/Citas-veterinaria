import Pacientes from "./Pacientes";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

   
    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen ">

            {pacientes && pacientes.length ? (
                <>
                 <h2 className=" text-orange-900 font-black text-3xl text-center">Listado de Pacientes</h2>
                  <p className="text-orange-900 text-xl mt-5 mb-10 text-center">
                          Administra tus {''}            
                         <span className="text-orange-500 font-bold">Pacientes y Citas</span>
                  </p>

                 { pacientes.map( (paciente) => {
                      return(
                      <Pacientes 
                          key={paciente.id}
                          paciente={paciente}
                          setPaciente={setPaciente}
                          eliminarPaciente={eliminarPaciente}
                      />
                    )})}
                </>
            ) : (
                <>
                <h2 className="text-orange-900 font-black text-3xl text-center">No hay Pacientes</h2>
                  <p className="text-orange-900 text-xl mt-5 mb-10 text-center">
                          Comienza agregando pacientes {''}            
                  <span className="text-orange-600 font-bold">y aparecerán en este lugar</span>
                  </p>
                </>
            )}
          
        </div>
    )
}

export default ListadoPacientes
