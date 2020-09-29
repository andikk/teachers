import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Operation} from "../../reducer";
import {getTeacherSelector} from "../../slectors";


const Teacher = (props) => {

  useEffect(() => {
    const {loadTeacher} = props;
    loadTeacher();
  }, []);

  const {name, address, tel, rank, position, institute, kafedra, description, disciplines, interest, publications, activity} = props.teacher;

  if (!name) return null;

  console.log(props.teacher.name);
  return (
    <div className="container">
      <div className="row pt-3">
        <div className="col-md-9">
          <h3>{name}</h3>

          <h4>Звание:</h4>
          <p>{rank}</p>

          <h4>Должность:</h4>
          <p>{position}</p>

          <h4>Институт:</h4>
          <p>{institute.name}</p>

          <h4>Кафедра</h4>
          <p>{kafedra.name}</p>

          <p>{description}</p>

          <h4>Список основных преподаваемых дисциплин:</h4>
          <ul>
            {disciplines.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>

          <h4>Сфера научных интересов:</h4>
          <p>{interest}</p>

          <h4>Список значимых публикаций:</h4>
          <p>{publications}</p>

          <h4>Данные публикационной активности в Российском индексе научного цитирования (РИНЦ):</h4>
          <p>Число публикаций {activity.countPub}</p>
          <p>Число цитирований {activity.countCite}</p>
          <p>Индекс Хирша {activity.hirsh}</p>
        </div>

        <div className="col-md-3">
          <div className="card mb-3">
            <div>
              <img src="#" className="card-img-top img-fluid" loading="lazy"/>
            </div>

            <div className="card-body text-secondary">
              <h5 className="card-title">Дмитрий Юрьевич Андреянов</h5>
              <div className="card-text">
                <p><strong>Адрес:</strong>{address}</p>
                <p><strong>Телефон:</strong>{tel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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