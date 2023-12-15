import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../model/chatbot/message.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ChatbotService {

    private url!: string;

    private DUMMY_MESSAGES: Message[] = [
        {
            id: 1,
            user: {
                id: 2,
                name: 'Atsuko',
                role: 'client',
                avatar: 'path-to-atsuko-avatar.png'
            },
            content: 'Hello, sensei, about our conversation earlier...<br>You asked me about hobbies, right?<br>I like flowers.',
            created: new Date().toISOString()
        },
        {
            id: 2,
            user: {
                id: 1,
                name: 'Newen',
                role: 'user',
                avatar: 'path-to-newen-avatar.png'
            },
            content: 'Hello, Atsuko.<br>You mean like... growing flowers?',
            created: new Date().toISOString()
        },

    ];

    constructor(private http: HttpClient) {
        this.url = '';
    }

    getMessages(): Observable<Message[]> {
        // This is the dummy test.
        return of(this.DUMMY_MESSAGES);
    }

    parseResponse(response: string): string[] {
        // Split the response by the specified delimiter to simulate multiple messages.
        return response.split('<br>').filter(message => message.trim().length > 0);
    }
}
