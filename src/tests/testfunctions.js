const nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    })
}
const prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    })
}
const handleChange = input => e => {
    this.setState({[input]: e.target.value})
}

export { nextStep, prevStep, handleChange }