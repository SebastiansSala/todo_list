(()=>{"use strict";let e=[{name:"All",id:1,task:[{title:"Task 1",desc:"Do something"},{title:"Task 2",desc:"Do something else"}]},{name:"Today",id:2,task:[{title:"Task 1",desc:"Do something"},{title:"Task 3",desc:"Do"}]},{name:"Week",id:3,task:[{title:"Task 1",desc:"Do something"},{title:"Task 2",desc:"Do something else"}]},{name:"Uno",id:4,task:[]}];const t=t=>{const n=parseInt(t.id),a=e.find((e=>e.id===n));return{createTask:(e,t)=>{const n={title:e,desc:t};a.task.push(n)},getTasks:()=>a?a.task:[],removeTask:t=>{a.task.splice(t,1),console.log(e)}}};let n=4;const a=()=>{const t=document.createElement("div");return t.classList.add("button-container"),{renderProjectModal:()=>{const a=document.createElement("div");a.innerHTML='\n            <div class="modal" tabindex="-1" role="dialog" id="myModal">\n              <div class="modal-dialog" role="document">\n                <div class="modal-content">\n                  <div class="modal-header">\n                    <h5 class="modal-title">Ingresa tu nombre</h5>\n                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n                      <span aria-hidden="true">&times;</span>\n                    </button>\n                  </div>\n                  <div class="modal-body">\n                    <form>\n                      <div class="form-group">\n                        <input type="text" class="form-control" id="name">\n                      </div>\n                    </form>\n                  </div>\n                  <div class="modal-footer">\n                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>\n                    <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-name">Guardar</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          ',document.body.appendChild(a),a.querySelector("#save-name").addEventListener("click",(()=>{const o=a.querySelector("#name"),d=(t=>{n++;const a=document.createElement("li");return a.id=n,a.classList.add("hover"),a.textContent=t,e.push({name:a.textContent,id:n,task:[]}),a})(o.value);t.appendChild(d),o.value="",document.querySelector(".list-group").appendChild(d),a.querySelector("form").addEventListener("submit",(e=>{e.preventDefault()}))})),new bootstrap.Modal(document.getElementById("myModal"),{}).show()},renderTaskModal:()=>{const e=document.createElement("div");e.innerHTML='\n    <div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="miModalLabel" aria-hidden="true">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title" id="miModalLabel">Crear tarea</h5>\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n          </button>\n        </div>\n        <div class="modal-body">\n          <form>\n            <div class="form-group">\n              <label for="titulo">Título</label>\n              <input type="text" class="form-control" id="titulo" placeholder="Ingresa el título de la tarea">\n            </div>\n            <div class="form-group">\n              <label for="descripcion">Descripción</label>\n              <textarea class="form-control" id="descripcion" rows="3" placeholder="Ingresa la descripción de la tarea"></textarea>\n            </div>\n            <div class="form-check">\n              <input class="form-check-input" type="checkbox" value="importante" id="prioridad">\n              <label class="form-check-label" for="prioridad">\n                Importante\n              </label>\n            </div>\n          </form>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>\n          <button type="button" class="btn btn-primary" id = \'save-name\'>Guardar tarea</button>\n        </div>\n      </div>\n    </div>\n  </div>\n          ',document.body.appendChild(e),e.querySelector("#save-name").addEventListener("click",(()=>{const t=e.querySelector("#titulo"),n=e.querySelector("#descripcion"),a=e.querySelector("#prioridad"),o=nameInput.value;nameInput.value,a.checked,console.log(o),t.value="",n.value="",document.querySelector(".list-group").appendChild(currentProject),e.querySelector("form").addEventListener("submit",(e=>{e.preventDefault()}))})),new bootstrap.Modal(document.getElementById("miModal"),{}).show()}}};(()=>{const e=document.createElement("div");e.innerHTML='\n  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Create Project</button>\n  ',e.addEventListener("click",(()=>{a().renderProjectModal()})),document.querySelector(".projects").appendChild(e);let n=null;const o=e=>{const n=document.querySelector(".main"),a=n.querySelector(".main-container"),d=(e=>{const n=document.createElement("div");n.classList.add("main-container");const a=t(e).getTasks();for(const e of a){const t=document.createElement("div");t.classList.add("task-container");const a=document.createElement("div");a.classList.add("item-1"),a.textContent=`${e.title}`;const o=document.createElement("div");o.classList.add("item-2"),o.innerHTML='<i class="large material-icons">mode_edit</i>\n        <i class="large material-icons">info_outline</i>\n        <i class="large material-icons remove">remove_circle_outline</i>',t.appendChild(a),t.appendChild(o),n.appendChild(t)}return n})(e);a?n.replaceChild(d,a):n.appendChild(d),document.querySelectorAll(".task-container").forEach(((n,a)=>{n.querySelector(".item-2").querySelector(".remove").addEventListener("click",(()=>{const n=a;t(e).removeTask(n),o(e)}))}))};document.querySelectorAll(".hover").forEach((e=>{e.addEventListener("click",(()=>{n=e,o(n)}))})),document.querySelector(".add").addEventListener("click",(()=>{t(n),a().renderTaskModal(),o(n)}))})()})();