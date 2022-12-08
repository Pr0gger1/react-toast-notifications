## Example

```jsx
const {toastElement, toastList, setToastList} = useToast();
<button onClick={
    () => new toastElement("Hello world!", "This is a title!").success
}>Click me!
</button>

<Toast position="top_center" setToastList={setToastList} toastList={toastList}/>
```