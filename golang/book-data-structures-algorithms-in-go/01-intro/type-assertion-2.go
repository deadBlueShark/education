package main

import "fmt"

func main() {
	var e expense = email{
		isSubscribed: false,
		body:         "Hello",
		toAddress:    "nguyenlc@gmail.com",
	}
	address, cost := getExpenseReport(e)
	fmt.Printf("Expense report:\n TO address: %s, cost: %.2f\n", address, cost)

	var s expense = sms{
		isSubscribed:  true,
		body:          "Hello SNS",
		toPhoneNumber: "0387998833",
	}
	phoneNumber, cost2 := getExpenseReport(s)
	fmt.Printf("Expense report:\n TO phone number: %s, cost: %.2f\n", phoneNumber, cost2)
}

func getExpenseReport(e expense) (string, float64) {
	emailStruct, emOk := e.(email)
	if emOk {
		return emailStruct.toAddress, emailStruct.cost()
	}

	smsStruct, sOk := e.(sms)
	if sOk {
		return smsStruct.toPhoneNumber, smsStruct.cost()
	}

	return "", 0.0
}

type expense interface {
	cost() float64
}

type email struct {
	isSubscribed bool
	body         string
	toAddress    string
}

type sms struct {
	isSubscribed  bool
	body          string
	toPhoneNumber string
}

type invalid struct{}

const EMAIL_UNSUBCRIBED_COST_RATE = 0.05
const EMAIL_SUBCRIBED_COST_RATE = 0.01

func (e email) cost() float64 {
	emailSentLength := len(e.body)
	if !e.isSubscribed {
		return float64(emailSentLength) * EMAIL_UNSUBCRIBED_COST_RATE
	}

	return float64(emailSentLength) * EMAIL_SUBCRIBED_COST_RATE
}

const SMS_UNSUBCRIBED_COST_RATE = 0.1
const SMS_SUBCRIBED_COST_RATE = 0.03

func (s sms) cost() float64 {
	smsSentLength := len(s.body)
	if !s.isSubscribed {
		return float64(smsSentLength) * SMS_UNSUBCRIBED_COST_RATE
	}

	return float64(smsSentLength) * SMS_SUBCRIBED_COST_RATE
}

func (i invalid) cost() float64 {
	return 0.0
}
