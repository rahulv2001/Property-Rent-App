import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding:"64px 0px 48px",
  },
  icon:{
    marginRight:"20px"
  },
  log:{
    marginLeft: "90%"
  },
  button:{
    marginTop:"40px"
  },
  cardGrid:{
    padding: "20px 0px"
  },
  card:{
    height:"100%",
    display:"flex",
    flexDirection:"column"
  },
  cardMedia:{
    paddingTop:"56.25%" // 16/9

  },
  cardContent:{
    flexGrow: 1
  },
  footer:{
      backgroundColor: "gray",
      padding:"50px 0px"
  }
}))

export default useStyles;