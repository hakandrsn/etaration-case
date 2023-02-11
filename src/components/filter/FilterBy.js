import React, {useEffect} from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import {
    Checkbox,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

const FilterBy = ({data, title,func}) => {
    const [checked, setChecked] = React.useState([]);
    const [sh, setSh] = React.useState("");
    const dispatch = useDispatch()
    const [datas, setDatas] = React.useState([]);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        dispatch(func(newChecked))
        setChecked(newChecked);
    };
    useEffect(() => {
        if(sh === ""){
        return setDatas(data)
        }
        if (sh !== "") {
            let newData = data.filter(item => item.toLowerCase().includes(sh.toLowerCase()))
            return setDatas(newData)
        }
    },[sh])
    return (
        <Grid2 item xs={{
            xs: 12
        }}>
            <div style={{textTransform: "capitalize", textAlign: "center", marginBottom: 4}}>{title}</div>
            <Divider sx={{marginY: 1}}/>
            <TextField sx={{width:"90%",mx:"auto"}} variant="outlined" size="small" placeholder="Search"  type="search" value={sh} onChange={(s)=>setSh(s.target.value)} />
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 200,
                    '& ul': {padding: 0},
                }}
                subheader={<li/>}
            >
                {datas.length<1 ? <Typography sx={{display:"flex",justifyContent:"center",marginY:1}}>No Data</Typography> :  datas?.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return (
                        <ListItem
                            key={value}
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{'aria-labelledby': labelId}}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`${value}`}/>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Grid2>
    );
};

export default FilterBy;