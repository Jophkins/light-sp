import {React, useState} from 'react';
import styles from "./Accordion.module.scss"

const Accordion = () => {

  const dataAccord = [
    {
      title: 'Заказ №',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda laboriosam laudantium nesciunt quam saepe voluptatem. Ad eius quasi repellendus!'
    },
    {
      title: 'Заказ №',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda laboriosam laudantium nesciunt quam saepe voluptatem. Ad eius quasi repellendus!'
    },
    {
      title: 'Заказ №',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda laboriosam laudantium nesciunt quam saepe voluptatem. Ad eius quasi repellendus!'
    }
  ]
  const [selected, setSelected] = useState(null)

  const accordToggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className='accordion'>
      {dataAccord.map((item, i) => {
        return (
          <div className={styles.item} key={i}>
            <div className={styles.title} onClick={() => accordToggle(i)}>
              <h2>{item.title}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? `${styles.content} ${styles.show}` : styles.content}>
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Accordion;
