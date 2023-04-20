import { styled } from "@mui/material";



export const MyTypography = styled('h2')({
    textAlign : 'center'
})

// export const MyToolbar =styled('div')({
//     width : "100vh",
//     heigth : "100vw",
//     display : 'flex',
//     justifyContent :'space-between',
//     alignItems : 'center',
//     textAlign : 'center',
// })

export const MyTextField = styled('input')({
    width : '40%',
    marginTop : '1vmax',
    padding :"5px", 
    outline : 'none',
});

export const MyButton = styled('button')({
    outline : 'none',
    borderRadius : '5px',
    marginTop : '1vmax',
    padding :"5px", 
    border : 'none',
    cursor : 'pointer',
    background : 'green',
    color : 'white',
})