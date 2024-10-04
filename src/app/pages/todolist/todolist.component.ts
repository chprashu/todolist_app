import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder } from '@angular/forms';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { checkEmpty } from 'src/app/shared/_common_functions';
import { TODO_ID, TODO_KEY } from 'src/app/shared/_global_consts';
import { Task } from 'src/app/shared/required-models.modal';
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  isEdit: boolean = false;

  constructor(
    private storageService: LocalstorageService,
    private fb: FormBuilder,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }
    
  MainForm = this.fb.group({
    Task:this.fb.group({
      id:[''],
      text:['']
    })
  })

  get tasks(){
    return this.storageService.getItem(TODO_KEY);
  }

  editTask(id: number){
    this.isEdit = true;
    let tasks: Task[] = this.storageService.getItem(TODO_KEY);

    let task = tasks.find(x => x.id == id);
    if(task != undefined){
      this.MainForm.controls.Task.patchValue(task);
    }
  }

  addTask() {
    let text = this.MainForm.controls.Task.get('text')?.value;
    let id = this.MainForm.controls.Task.get('id')?.value;

    let tasks: Task[] = this.storageService.getItem(TODO_KEY) ? this.storageService.getItem(TODO_KEY) : [];

    var task = null;
    var index = null;
    let action: 'create' | 'edit';
    if (checkEmpty(id)) {
      action = 'edit';
      task = tasks.find(x => x.id == id);
      index = tasks.findIndex(x => x.id == id);
    }else{
      action = 'create';
    }

    if (checkEmpty(text)) {

      let task: Task = {
        id: id ? id : this.storageService.getId(TODO_ID),
        text: text ? text : ''
      }

      if (index != null) {
        tasks[index] = task;
      } else {
        tasks.push(task);
      }

      this.storageService.setItem(tasks, TODO_KEY);
      const message = action == 'create' ? 'Added Successfully' : 'Edited Successfully';
      this.messageService.add({key: 'msg', severity: 'success', summary: 'Success', detail: message});
    }

    this.MainForm.controls.Task.reset();
    this.isEdit = false;
  }

  deleteTask(id: number){
    let tasks: Task[] = this.storageService.getItem(TODO_KEY);
    let index = tasks.findIndex(x => x.id == id);
    tasks.splice(index, 1);
    this.storageService.setItem(tasks, TODO_KEY);
    this.messageService.add({key: 'msg', severity: 'success', summary: 'Success', detail: 'Deleted Successfully', life: 200000});
  }

}
