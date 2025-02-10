package main

import "fmt"

type user struct {
	name        string
	phoneNumber int
}

type messageToSend struct {
	message   string
	sender    user
	recipient user
}

func canSendMessage(m messageToSend) bool {
	senderExisted := m.sender.name != "" && m.sender.phoneNumber != 0
	recipientExisted := m.recipient.name != "" && m.recipient.phoneNumber != 0
	return senderExisted && recipientExisted
}

func main() {
	sender1 := user{}
	recipient1 := user{name: "Nguyen", phoneNumber: 32323}
	messageToSend1 := messageToSend{
		message:   "Hello World",
		sender:    sender1,
		recipient: recipient1,
	}

	fmt.Println("Sender 1 can send message to Recipient 1:", canSendMessage(messageToSend1))

	sender2 := user{name: "Bob", phoneNumber: 32323}
	recipient2 := user{name: "John", phoneNumber: 423222}
	messageToSend2 := messageToSend{
		message:   "Hello World",
		sender:    sender2,
		recipient: recipient2,
	}
	fmt.Println("Sender 2 can send message to Recipient 2:", canSendMessage(messageToSend2))
}
