import styles from '../../../styles/Subscribe/CreatePlan.module.scss'
import { Context } from '../../../context/Context'
import { useContext } from 'react'

export default function CreatePlan() {

    const {amountOfCoffee, howYouDrink, typeOfCoffee, typeOfGrind, deliveryFrequency, setShowOrderSummary, buttonConstraints, handleCreatePlanClick} = useContext(Context)

    return (
        <div className={styles.container}>
            <div className={styles.orderSummary}>
                <h4>ORDER SUMMARY</h4>
                <h2>&ldquo; I drink my coffee using <span>{howYouDrink}</span>, with a <span>{typeOfCoffee}</span> type of bean. <span>{amountOfCoffee}</span> ground ala <span>{typeOfGrind}</span> sent to me <span>{deliveryFrequency}</span>.&rdquo;</h2>
            </div>
            <div className={styles.buttonContainer} >
                <a className={styles.button} style={buttonConstraints} onClick={handleCreatePlanClick}>Create my plan!</a>
            </div>
      </div>
    )
}