import { Card, Text } from "../../components"
import { Button } from "antd"
import { useState } from 'react'

const BookInformation = () => {
    const [step, setStep] = useState<number>(1);

    const handleNext = () => {
        if(step === 1) {
            setStep((prevStep) => prevStep+1)
        }

        return
    }

    const handlePrev = () => {
        if(step === 2) {
            setStep((prevStep) => prevStep-1)
        }

        return
    }

    return (
        <>
        {step === 1 && (
            <Card>
                <div> 
                    <Text >Nama Buku:</Text>
                    <Text >Harry Potter</Text>
                </div>
                <div>
                    <Text >Harga Buku:</Text>
                    <Text >Rp 12.000</Text>
                </div>
            </Card>
        )}
        {step === 2 && ( 
        <Card>
            <Text >Description:</Text>
            <Text >Lorem ipsum dolor sit amet</Text>
        </Card>
        )}
        <div>
        {step === 2 && (
            <Button onClick={handlePrev}>Back</Button>
        )}
        {step === 1 && (
            <Button type={'primary'} onClick={handleNext}>Next</Button>
        )}
        </div>
        
        </>
    )
}

export default BookInformation