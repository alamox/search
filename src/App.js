import { useState } from "react";
import SearchBar from "./components/searchBar";
import style from './components/style.module.css';

const people = [
  {
    id: 'people-01',
    title: 'Juan Pérez',
  },
  {
    id: 'people-02',
    title: 'Marcos Serra',
  },
  {
    id: 'people-03',
    title: 'Mar Serracanta',
  },
  {
    id: 'people-04',
    title: 'Luis del Olmo',
  },
  {
    id: 'people-05',
    title: 'Joan Pradells',
  },
];

const calendar = [
  {
    id: 'calendar-01',
    title: 'Sesión de seguimientos',
  },
  {
    id: 'calendar-02',
    title: 'Revisión de propuestas',
  },
  {
    id: 'calendar-03',
    title: 'Evento para donar juguetes',
  },
  {
    id: 'calendar-04',
    title: 'Junta semanal de equipo',
  },
  {
    id: 'calendar-05',
    title: 'Revisión de pendientes con cliente',
  },
];

const emails = [
  {
    id: 'email-01',
    title: 'Reporte de resultados',
  },
  {
    id: 'email-02',
    title: 'Requisitos para cambio',
  },
  {
    id: 'email-03',
    title: 'Estatus de funcionalidad',
  },
  {
    id: 'email-04',
    title: 'Próximos eventos',
  },
  {
    id: 'email-05',
    title: 'Participa en la encuesta',
  },
];

function App() {
  const [data, setData] = useState([...people, ...calendar,...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState('all');
  const [count, setCount] = useState(0);

  function handleClick(e){
    const op = e.target.name; //Name dentro de button se utiliza para especificar que boton se esta clicando
    
    switch(op){
      case 'all':
        setData([...people, ...calendar,...emails]);
        setCurrentOption('all');
        break;
      case 'people':
        setData([...people]);
        setCurrentOption('people');
        break;
      case 'calendar':
        setData([...calendar]);
        setCurrentOption('calendar');
        break;
      case 'emails':
        setData([...emails]);
        setCurrentOption('emails');
        break;
      default:
    }
  }

  function handleItemSelected(item){
    setSelection(item);
  }

  return (
    <div>
      <button className={style.button} onClick={handleClick} name='all'>All</button> 
      <button className={style.button} onClick={handleClick} name='people'>People</button>
      <button className={style.button} onClick={handleClick} name='calendar'>Calendar</button>
      <button className={style.button} onClick={handleClick} name='emails'>Emails</button>

      <button onClick={() => setCount(count +1)}>{count}</button>
      {selection ? <div>You selected: {selection.title}</div> : ''}
      <SearchBar items={data} onItemSelected={handleItemSelected}/>
    </div>

    
  );
}

export default App;
