### In `tailwind.config.js` change the theme string or make your own!


This is the block of code:  
*Notice there are two options in this Array (remember what arrays are??)*

```javascript
    daisyui: {
    themes: [
        "luxruy",
        {
            "mytheme": {
                "primary": "#e7e5e4",
                "secondary": "#152747",
                "accent": "#513448",
                "neutral": "#331800",
                "base-100": "#09090b",
            },
        },
    ],
},
```

These are the valid options that our site knows about, it takes the first one by default.
- Try changing the `forest` string to one from [daisyui](https://daisyui.com/docs/themes/)
- Or try removing the `forest` string and creating your own.
- ORRRRRRRRRR......

### Create Dark Mode

Add a toggle for Dark mode
- Add `light` and `dark` to your theme list.
- Go to `src/componentsNavBarContainer.tsx`

Change:

```jsx
// <DarkModeButton/>
```

to

```jsx
<DarkModeButton/>
```

BONUS: `light` and `dark` are just strings here for the name of the default theme.
Could we create our own "dark" and "light" themes?
