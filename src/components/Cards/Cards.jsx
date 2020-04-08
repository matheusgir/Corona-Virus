import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ( { data :{confirmed, recovered, deaths, lastUpdate } } ) => {
    if(!confirmed) {
        return 'Carregando...';
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="gutterBottom">Infectados</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Número de casos confirmados da COVID-19</Typography>                        
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="gutterBottom">Curados</Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Número de pessoas curadas da COVID-19</Typography>                        
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="gutterBottom">Mortes</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2">Número de mortes pela COVID-19</Typography>                        
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    );
}

export default Cards;