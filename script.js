"use strict";

const main_grid_container = document.getElementById("main-grid-container");
const add_list_btn = document.querySelector(".add_list_btn");

let lists = [];

let counter = 1;

function addNewList() {
  let main_grid_item = document.createElement("li");
  main_grid_item.className = "main-grid-item";
  main_grid_item.id = `list_${counter.toString()}`;

  let item_header = document.createElement("div");
  item_header.className = "item-header";

  let list_name_input = document.createElement("input");
  list_name_input.type = "text";
  list_name_input.className = "list_name_input";
  list_name_input.id = "list_name_input";
  list_name_input.placeholder = "Untitled";

  let close_btn = document.createElement("button");
  close_btn.className = "close-btn";
  close_btn.id = " close-btn";
  close_btn.onclick = function () {
    main_grid_item.remove();
  };

  let fa_solid = document.createElement("i");
  fa_solid.classList = "fa-solid fa-xmark";

  let inside_flex_container = document.createElement("ul");
  inside_flex_container.className = "inside-flex-container";
  inside_flex_container.id = "inside-flex-container";

  let add_line_btn = document.createElement("button");
  add_line_btn.className = "add_line_btn";
  add_line_btn.id = "add_line_btn";
  add_line_btn.innerText = "+ Add new line";
  add_line_btn.onclick = () => {
    addNewLine(inside_flex_container);
  };

  close_btn.append(fa_solid);
  item_header.append(list_name_input, close_btn);
  main_grid_item.append(item_header, inside_flex_container, add_line_btn);
  main_grid_container.append(main_grid_item);
  main_grid_item.insertAdjacentElement("afterend", add_list_btn);


  let list = { name: "", tasks: [] };
  list_name_input.addEventListener("keyup", (e) => {
    if (e.code == "Enter") {
      list.name = e.currentTarget.value;
    }
  });
  lists.push(list);
  counter++;
}

let counterOfTask = 1;

function addNewLine(el) {
  let inside_flex_item = document.createElement("li");
  inside_flex_item.className = "inside-flex-item";

  let close_line = document.createElement("button");
  close_line.className = "close-line";
  close_line.id = "close-line";
  close_line.innerText = "Remove";
  close_line.onclick = function () {
    inside_flex_item.remove();
  };

  let text_area = document.createElement("textarea");
  text_area.className = "inside-item-text";
  text_area.id = `task_${counterOfTask.toString()}`;
  text_area.placeholder = " Enter text...";
  text_area.onkeyup = function (ev) {
    if (ev.code == "Enter") {
      lists.map((list) => {
        if (
          list.name ==
          ev.currentTarget.parentElement.parentElement.previousElementSibling
            .firstElementChild.value
        ) {
          list.tasks.push(ev.currentTarget.value.trim());
        }
        return list;
      });
    }
  };

  inside_flex_item.append(text_area);

  inside_flex_item.insertAdjacentHTML(
    "beforeend",
    `
                <div class="inside-item-box">
                    <ul class="inside-info">
                        <li>
                            <img src="./img/justify.png" alt="">
                        </li>
                        <li>
                            <img src="./img/checkbox.png" alt="">
                            <span>4/8</span>
                        </li>
                        <li>
                            <img src="./img/attach.png" alt="">
                            <span>2</span>
                        </li>
                        <li>
                            <img src="./img/comments.png" alt="">
                            <span>4</span>
                        </li>
                    </ul>
                    <img class="inside-info-gender" src="./img/woman_2.png" alt="">
                </div>
        `
  );

  inside_flex_item.append(close_line);
  el.insertAdjacentElement("beforeend", inside_flex_item);
}
