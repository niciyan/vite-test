### References
https://www.youtube.com/watch?v=6fM3ueN9nYM&t=1598s

### note

**The original code use react-router v5.
With v6, You need to take care of things below...**


Couple of updates for those who are coming here after recent React Router v6 release and newer Windows restrictions on script execution.
- React Router routes now need to be wrapped in a Routes component. 
- Route components now use an element prop
`<BrowserRouter> 
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
</BrowserRouter>`
- To use history you will need to use the react router functions `useNavigate` e.g. `let navigate = useNavigate()` then call  `navigate('/')` in your `handleSubmit` fucntions. Similarly to use your id params you will need to use `useParams` function. e.g. `let id p= useParams().id`

- Windows does not like json-server and serve scripts so to launch json server you may need to elevate your integrate terminal or open an elevate PS/CMD instance to run `json-server` and `serve` commands.