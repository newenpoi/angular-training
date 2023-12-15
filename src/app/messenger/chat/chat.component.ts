import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../../service/chatbot.service';
import { Message } from 'src/app/model/chatbot/message.model';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {

    // Our messages.
    messages: Message[] = [];

    // Constructor.
    constructor(private service: ChatbotService) { }

    ngOnInit(): void { this.loadMessages(); }

    loadMessages(): void {
        this.service.getMessages().subscribe((data: Message[]) => {
            this.messages = data;
            console.log(data);
        });
    }

    handleSendMessage(newMessageContent: any) {
        console.log("Sent.");
    }
}
