## Example
```jsx
const {showToast, toastList, setToastList} = useToast();
<burtton onClick={
    () => new showToast("Hello world!", "This is a title!").success
}>Click me!
</burtton>

<Toast position="top_center" setToastList={setToastList} toastList={toastList}/>
```