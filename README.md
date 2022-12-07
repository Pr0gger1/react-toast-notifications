## Example
```jsx
const {showToast, toastList, setToastList} = useToast();
<button onClick={
    () => new showToast("Hello world!", "This is a title!").success
}>Click me!
</button>

<Toast position="top_center" setToastList={setToastList} toastList={toastList}/>
```