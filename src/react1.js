import React , {Component} from "react";
import  ButtonGroup  from "@material-ui/core/ButtonGroup";
import  Button  from "@material-ui/core/Button";

class EffectClass extends Component {
    constructor (props){
        super (props)
        this.state = {
            count:0,
        }
    }

    componentDidMount(){
        document.title = `${this.state.count}回クリックされました`
    }

    componentDidUpdate(){
        document.title = `${this.state.count}回クリックされました`
    }

    countUp (){
        this.setState({count:this.state.count+1})
    }

    countReset () {
        this.setState({count:0})
    }

    render (){
        return (
            <>
                <p>{`${this.state.count}回クリックされました`}</p>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={()=>{this.countUp()}}>
                        ボタン
                    </Button>
                    <Button onClick={()=>{this.countReset()}}>
                        リセット
                    </Button>
                </ButtonGroup>
            </>
        )
    }
}

export default EffectClass