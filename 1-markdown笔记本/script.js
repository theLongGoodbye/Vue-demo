const log = console.log.bind(console)
// New VueJS instance
Vue.filter('date', time => moment(time)
    .format('DD/MM/YY, HH:mm'))

new Vue({
  name: 'notebook',

  // CSS selector of the root DOM element
  el: '#notebook',

  // Some data
  data () {
    return {
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      selectedId: localStorage.getItem('selected-id') || null,
    }
  },

  // Computed properties
  computed: {
    notePreview () {
      // Markdown rendered to HTML
      return this.selectedNote ? marked(this.selectedNote.content) : ''
    },
    addButtonTitle () {
      return this.notes.length + ' note(s) already'
    },
    selectedNote () {
      // 返回与 selectedId 匹配的笔记
      return this.notes.find(note => note.id === this.selectedId)
    },

    sortedNotes() {
      return this.notes.slice()
          .sort((a, b) => a.created - b.created)
          .sort((a, b) => (a.favorite === b.favorite) ? 0
              : a.favorite ? -1
                  : 1)
    },

    linesCount() {
      if (this.selectedNote) {
        // 计算换行符的个数
        return this.selectedNote.content.split(/\r\n|\r|\n/).length
      }
    },
    wordsCount() {
      if (this.selectedNote) {
        var s = this.selectedNote.content
        // 将换行符转换为空格
        s = s.replace(/\n/g, ' ')
        // 排除开头和结尾的空格
        s = s.replace(/(^\s*)|(\s*$)/gi, '')
        // 将多个重复空格转换为一个
        s = s.replace(/\s\s+/gi, ' ')
        // 返回空格数量
        return s.split(' ').length
      }
    },
    charactersCount() {
      if (this.selectedNote) {
        return this.selectedNote.content.split('').length
      }
    },
  },

  // Change watchers
  watch: {
    /*content: {
      handler (val, oldVal) {
        console.log('new note:', val, 'old note:', oldVal)
        localStorage.setItem('content', val)
      },
      immediate: true,
    },*/

    /*content (val) {
      localStorage.setItem('content', val)
    },*/

    /*content: {
      handler: 'saveNote',
    },*/
    notes: {
      // 方法名
      handler: 'saveNotes',
      // 需要使用这个选项来侦听数组中每个笔记属性的变化
      deep: true,
    },
    selectedId (val) {
      localStorage.setItem('selected-id', val)
    },
  },

  methods: {

    reportOperation (opName) {
      console.log('The', opName, 'operation was completed!')
    },
    addNote() {
      const time = Date.now()
      // 新笔记的默认值
      const note = {
        id: String(time),
        title: 'New note ' + (this.notes.length + 1),
        content: `**Hi!** This notebook is using
            [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
    ) for formatting!`,
        created: time,
        favorite: false,
      }
      // 添加到列表中
      this.notes.push(note)
    },

    selectNote (note) {
      this.selectedId = note.id
    },

    saveNotes() {
      // 在存储之前不要忘记把对象转换为 JSON 字符串
      localStorage.setItem('notes', JSON.stringify(this.notes))
      console.log('Notes saved!', new Date())
    },

    removeNote() {
      if (this.selectedNote && confirm('Delete the note?')) {
        // 将选中的笔记从笔记列表中移除
        const index = this.notes.indexOf(this.selectedNote)
        if (index !== -1) {
          this.notes.splice(index, 1)
        }
      }
    },

    favoriteNote() {
      this.selectedNote.favorite = !this.selectedNote.favorite
    },
  }


  /* created () {
    this.content = localStorage.getItem('content') || 'You can write in **markdown**'
  }, */
})
