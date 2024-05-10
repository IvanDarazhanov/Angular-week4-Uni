import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-todo-task',
    templateUrl:'./todo-task.component.html',
    styleUrl:'./todo-task.component.css',
    standalone: true
})
export class TodoTaskComponent implements OnInit, OnChanges{
    @Input() public inputTask;

    @Input() public inputStatus;

    @Input() public inputTaskObject;

    @Output() public onStatusChange = new EventEmitter();

    public processStatus(statusCode){
        this.inputTaskObject.status=statusCode;
        this.onStatusChange.emit(statusCode);
    }

    public getClassByStatus(status){
        if(status=='todo')return'todo';
        if(status=='doing')return'doing';
        else{return'done';}
    }

    public ngOnInit(){
        console.log("TaskComponent INIT")
    }

    public ngOnChanges(){
        console.log("TaskCOmponent Changed")
    }
}