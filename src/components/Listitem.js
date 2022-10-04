import styles from '../style.module.css';

const Listitem = ({todoitem, key})=>{

    return <div className={styles.listitembox}>
        <p className={styles.listitem} key = {key}>{todoitem}</p>
        <div>
        <button className={styles.listbtn}>Done</button>
        </div>
        
    </div>

}

export default Listitem;