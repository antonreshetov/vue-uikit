export default {
    data () {
        return {
            computedSource: []
        }
    },

    methods: {
        getColumn () {
            this.$parent.$children.forEach((item, index) => {
                if (item.$data.column) {
                    this.computedSource.push([])
                    item.$data.column.forEach(col => {
                        const temp = {}
                        temp[item.$props.col] = col
                        this.computedSource[index].push(temp)
                    })
                }
            })
            this.computedSource = _.merge(this.computedSource[0], ...this.computedSource)
        }
    },

    mounted () {
        this.getColumn()
    },

    render (h) {
        return (
            <table>
                {
                    this._l(this.computedSource, row =>
                        <tr>
                            {
                                this._l(row, col =>
                                    <td>{col}</td>
                                ).concat(<td><button>button</button></td>)
                            }
                        </tr>
                    )
                }
            </table>
        )
    }
}
