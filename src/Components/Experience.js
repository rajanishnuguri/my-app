import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TIBCO from '../CITI.jpg';
import DBS from '../DBS.jpg';

const useStyles = makeStyles({
    header: {
        fontSize: '30pt',
        fontWeight: '500',
        color: '#444649',
        fontFamily: 'raleway-bold',
        textAlign: 'center',
        textDecoration: 'underline',
        marginBottom: '100px'
    },
    root: {
        maxWidth: 345,
        display: 'inline-block',
        marginRight: '20px',
        marginLeft: '20px',
    },
    media: {
        height: 140,
    },
});
export default function Experience(){
    const classes = useStyles();
    return(
	<div style={{paddingTop: "100px",background: "#f5f5f5"}}>
        <div className={classes.header}>
            Projects
        </div>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={DBS}
                    title="DBS"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        DBS BANK
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Worked on various applications in DBS bank using TIBCO technologies and Java
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={TIBCO}
                    title="TIBCO"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        CITI BANK
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Worked on various applications in citi bank using TIBCO technologies and Java
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
   </div>
			
    );
}