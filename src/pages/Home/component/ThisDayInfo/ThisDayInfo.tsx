import React from "react";
import styles from './ThisDayInfo.module.scss'
import Cloud from  '../../../../assed/images/Cloud.png'
import { ThisDayitem } from "./ThisDayItem";

interface Props {

}
export interface Item {
    icon_id: string,
    name: string,
    value: string 
}
export const ThisDayInfo = (props:Props) => {
    const items = [
        {
          icon_id: 'temp',
          name: 'Температура',
          value: '20° - ощущается как 17°',
        },
        {
          icon_id: 'pressure',
          name: 'Давление',
          value: '765 мм ртутного столба - нормальное',
        },
        {
          icon_id: 'precipitation',
          name: 'Осадки',
          value: 'Без осадков',
        },
        {
          icon_id: 'wind',
          name: 'Ветер',
          value: '3 м/с юго-запад - легкий ветер',
        },
      ];
    return(
        <div className={styles.thisdayinfo}>
            <div className={styles.Thisdayitems}>
            {items.map((item: Item) => (
          <ThisDayitem key={item.icon_id} item={item} />
        ))}
            </div>
            <img className={styles.cloud_img} src={Cloud} alt="oblaco" />
        </div>
    )
}