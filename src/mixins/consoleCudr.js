import { deepClone } from '../utils'

export default {
  data() {
    return {
      multipleSelection: []
    }
  },

  computed: {
    multipleActionDisable() {
      return this.multipleSelection.length === 0
    }
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 进入编辑
    handleRowEdit(scope) {
      this.$refs.DialogRow.handleOpen(deepClone(scope.row), 'EDIT')
    },

    handleRowDetail(scope) {
      const route = {
        query: this.$route.query,
        append: true
      }
      if (this.pageRowName) {
        route.name = this.pageRowName
        route.data = scope.row
      } else {
        route.path = String(scope.row.id)
      }
      this.$router.push(route)
    },
    // 跳转至页面编辑
    handleRowEditpage(scope) {
      let route
      if (this.pageRowName) {
        route = {
          name: this.pageRowName,
          params: scope.row,
          data: scope.row
        }
      } else {
        route = {
          append: true,
          path: `${scope.row.id}/edit`
        }
      }
      this.$router.push(route)
    },

    handleUpdate(form) {
      return this.updateApi(`/${this.apiName}`, form)
    },
    // 批量操作
    handleMultipleAction(e) {
      const { command } = e
      this.$confirm('确认执行?', '提示', {
        type: 'warning'
      }).then(() => {
        if (command === 'Delete') {
          const ids = this.multipleSelection.map(_ => _.id).join(',')
          this.handleDelete(ids)
        } else {
          this[`handleMultiple${command}`](this.multipleSelection)
        }
      })
    },

    handleCreate() {
      this.$refs.DialogRow.handleOpen()
    },

    handleAction(e) {
      const command = e.command.split('.')
      if (command.length === 1) command.unshift('Toolbar')
      const [mode, cmd] = command

      if (mode === 'Toolbar') {
        this[`handle${cmd}`]()
      } else if (mode === 'Row') {
        this[`handleRow${cmd}`](e.scope)
      } else {
        e.command = cmd
        this.handleMultipleAction(e)
      }
    },
    // 行删除
    handleRowDelete(scope) {
      const { row } = scope
      this.$confirm('确认操作?', '提示', {
        type: 'warning'
      }).then(() => {
        this.handleDelete(row.id)
      }).catch(() => {
        return
      })
    },

    async handleDelete(id) {
      if (!id) {
        console.warn('no-id')
        return
      }
      await this.Fetch.delete(`/${this.apiName}/${id}`)
      this.actionSuccess()
      this.init()
    },

    async handleRowSubmit(form) {
      // try {
      //   await this.handleUpdate(form)
      // } catch (e) {
      //   return
      // }
      // this.$refs.DialogRow.handleClose()
      // this.actionSuccess()
      // this.init()
    },

    handleRowClone(scope) {
      const form = deepClone(scope.row)
      form.name = form.name + ' COPY'
      this.handleRowSubmit(form)
    },

    updateApi(url, form) {
      const mode = form._mode
      if (mode === 'EDIT') {
        return this.Fetch.put(`${url}/${form.id}`, form)
      } else {
        return this.Fetch.post(url, form)
      }
    },

    actionSuccess() {
      this.message.success('操作成功')
    }
  }
}
