import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorite } from '../../../redux/features/favorite';
import { getQuestion } from '../../../redux/features/question';
import QuestionCard from '../ContentBlock/QuestionCard';
import QuestionSimpleCard from '../ContentBlock/QuestionSimpleCard';
import styles from "./favorites.module.css"

const Favorites = () => {
    const [check , setCheck] = useState(false)
    
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getFavorite());
    },[dispatch]);
  
  const state = useSelector((state)=>state.favorite.favorites)
  const favoriteLoading = useSelector((state)=>state.favorite.favoriteLoading)
  
  
  if(favoriteLoading)
  {
      return(
          <div className={styles.preloader}>
    <div className={styles.preloader__row}>
      <div className={styles.preloader__item}></div>
      <div className={styles.preloader__item}></div>
    </div>
  </div>
      )
  }
    return (
        
      <div className={styles.MainContentBlock}>
          <div className={styles.tittle}>
        <div>
          <h3>Избранные</h3>
        </div>
        <div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked = {check}
              onClick={()=> setCheck(!check)}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
            Корректный вид
            </label>
          </div>
        </div>
      </div>
        <div>
          {state.questions
          ?
          state.questions.map((question) => {
              return(
                <React.Fragment key={question._id}>
                  {!check?<QuestionCard question={question} state ={state} />
                  :<QuestionSimpleCard question={question} state = {state}/>
              }
                </React.Fragment>
              )
          })
        :
        <div>Ничего нет</div>
        }
        </div>
      </div>
    );
};

export default Favorites;