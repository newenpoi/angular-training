import { Component, Input } from '@angular/core';
import { Message } from 'src/app/model/chatbot/message.model';

@Component({
    selector: 'app-chat-group',
    templateUrl: './chat-group.component.html',
    styleUrls: ['./chat-group.component.scss']
})

export class ChatGroupComponent {
    @Input() group: Message[] = [];
}
