interface ItemInterface {
  text: string;
  done: boolean;
  id: number;
}

const form = document.querySelector('form') as HTMLFormElement;
const itemsList = document.querySelector('.plates') as HTMLUListElement;
const addItemInput = document.querySelector('[name=item]') as HTMLInputElement;

const items: Array<ItemInterface> = JSON.parse(localStorage.getItem('items')) || [];

const createItemTemplate = (item: ItemInterface) => {
  if (items.length < 1) {
    item.id = 0;
  }

  if (item.id === null) {
    const last = items.length - 1;
    item.id = last + 1;
  }

  return `
  <li>
    <input type="checkbox" data-index=${item.id} id="item${item.id}" ${item.done ? 'checked' : ''}>
    <label for="item${item.id}">${item.text}</label>
  </li>`;
};

const addTemplateStringAsHTML = (itemTemplate: string) => {
  itemsList.insertAdjacentHTML('beforeend', itemTemplate);
};

const renderItems = () => {
  for (let item of items) {
    const itemTemplate = createItemTemplate(item);
    addTemplateStringAsHTML(itemTemplate);
  }
};

renderItems();

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  if (addItemInput.value === '') return;

  const item: ItemInterface = {
    text: addItemInput.value,
    done: false,
    id: null,
  };

  const itemTemplate = createItemTemplate(item);

  addTemplateStringAsHTML(itemTemplate);

  items.push(item);

  saveItemsToLocalStorage(items);

  addItemInput.value = '';
};

const saveItemsToLocalStorage = (items: Array<ItemInterface>) => {
  const newItemsString = JSON.stringify(items);

  localStorage.setItem('items', newItemsString);
};

const handleToggle = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  if (target.previousElementSibling === null || target.previousElementSibling.tagName !== 'INPUT')
    return;
  const input = target.previousElementSibling as HTMLInputElement;

  const inputIndex = +input.dataset.index;

  items[inputIndex].done = !input.checked;

  saveItemsToLocalStorage(items);
};

form.addEventListener('submit', handleSubmit);
itemsList.addEventListener('click', handleToggle);
