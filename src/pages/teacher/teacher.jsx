import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Operation} from "../../reducer";
import {getTeacherSelector} from "../../slectors";

const teacher = {
  name: "Дмитрий Юрьевич Андреянов",
  address: "г.Ставрополь, ул. Пушкина 1, корпус 1, ауд. 315а.",
  tel: "(8652) 35-32-78",
  rank: "Кандидат географических наук",
  position: "доцент кафедры физической географии и кадастров",
  institute: {id: 1, name: "Математики и естественных наук"},
  kafedra: {id: 1, name: "Физической географии и кадастров"},
  description: "В 2000-2005 гг. обучался на географическом факультете СГУ. В 2008 гг. окончил аспирантуру Российской Академии сельскохозяйственных наук. В 2009 г. защитил диссертацию на тему «Адаптивно-ландшафтное землеустройство локальных геосистем Ставропольского.",
  disciplines: [
    {id: 1, name: "Геодезия"},
    {id: 2, name: "Современные геодезические приборы"},
    {id: 3, name: "Географические и земельно-информационныесистемы"},
    {id: 4, name: "Муниципальные ГИС"}
  ],
  interest: "Геоинформатика, геодезия, землеустройство." ,
  publications: "1.Методические подходы к формированию севооборотов, адаптированных к ландшафтным таксонам локального\n" +
    "уровня // Земледелие, №8. М., 2008. - С. 9-11\n" +
    "2.Подверженность ландшафтов Ставрополья деградационным процессам // Материалы Всероссийской\n" +
    " научно-практической конференции «Современная парадигма науки и образования». –Уфа, РИЦ БашГУ, 2010. – 389",
  activity: {
    countPub: 4,
    countCite: 24,
    hirsh: 3
  }
};


const Teacher = (props) => {

  useEffect(() => {
    const {loadTeacher} = props;
    loadTeacher();
  }, []);

  if (teacher.name === undefined) return null;

  const {name, address, tel, rank, position, institute, kafedra, description, disciplines, interest, publications, activity} = props.teacher;


  console.log(props.teacher.name);
  return (
    <div className="container">
      {/*<div className="row pt-3">*/}
      {/*  <div className="col-md-9">*/}
      {/*    <h3>{name}</h3>*/}

      {/*    <h4>Звание:</h4>*/}
      {/*    <p>{rank}</p>*/}

      {/*    <h4>Должность:</h4>*/}
      {/*    <p>{position}</p>*/}

      {/*    <h4>Институт:</h4>*/}
      {/*    <p>{institute.name}</p>*/}

      {/*    <h4>Кафедра</h4>*/}
      {/*    <p>{kafedra.name}</p>*/}

      {/*    <p>{description}</p>*/}

      {/*    <h4>Список основных преподаваемых дисциплин:</h4>*/}
      {/*    <ul>*/}
      {/*      {disciplines.map(item => <li key={item.id}>{item.name}</li>)}*/}
      {/*    </ul>*/}

      {/*    <h4>Сфера научных интересов:</h4>*/}
      {/*    <p>{interest}</p>*/}

      {/*    <h4>Список значимых публикаций:</h4>*/}
      {/*    <p>{publications}</p>*/}

      {/*    <h4>Данные публикационной активности в Российском индексе научного цитирования (РИНЦ):</h4>*/}
      {/*    <p>Число публикаций {activity.countPub}</p>*/}
      {/*    <p>Число цитирований {activity.countCite}</p>*/}
      {/*    <p>Индекс Хирша {activity.hirsh}</p>*/}
      {/*  </div>*/}

      {/*  <div className="col-md-3">*/}
      {/*    <div className="card mb-3">*/}
      {/*      <div>*/}
      {/*        <img src="#" className="card-img-top img-fluid" loading="lazy"/>*/}
      {/*      </div>*/}

      {/*      <div className="card-body text-secondary">*/}
      {/*        <h5 className="card-title">Дмитрий Юрьевич Андреянов</h5>*/}
      {/*        <div className="card-text">*/}
      {/*          <p><strong>Адрес:</strong>{address}</p>*/}
      {/*          <p><strong>Телефон:</strong>{tel}</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    loadTeacher: () => dispatch(Operation.loadTeacher(ownProps.match.params.id)),
  })
};

const mapStateToProps = (state, ownProps) => {
  return ({
    teacher: getTeacherSelector(state),
  })
};

export {Teacher}
export default connect(mapStateToProps, mapDispatchToProps)(Teacher);