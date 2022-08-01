import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({

    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: '#003155',
        zIndex: 1,
        borderBottom: '1px solid grey',
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
    },
    p5: {
        padding: '5px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
})

export const Navbar = () => {
    const classes = useStyles();

    return (
        
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween}`}>
            
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
                    <li>
                        <Button>
                        <Link to='/BookInventory' className={`${classes.navbarItem} ${classes.psides}`}>Book Library</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                        <Link to='/Signin' className={`${classes.navbarItem} ${classes.psides}`}>Sign in</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='Contact' className={`${classes.navbarItem} ${classes.psides}`}>Contact Us</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='About' className={`${classes.navbarItem} ${classes.psides}`}>About Us</Link>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}