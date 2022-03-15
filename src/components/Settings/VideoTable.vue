<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort="{ prop: 'date', order: 'descending' }"
    :row-style="tableRowStyle"
    :header-cell-style="tableHeaderColor"
    :header-row-style="tableHeaderStyle"
    max-height="300"
    border
  >
    <el-table-column type="selection" width="35"> </el-table-column>
    <el-table-column
      label="视频名称"
      sortable
      :min-width="nameCellWidth[getNameCellWidth()]"
      prop="title"
    >
      <template v-slot="scope">
        <div v-if="renameIndex !== scope.$index">
          {{ scope.row.title }}
        </div>
        <div v-else-if="renameIndex === scope.$index">
          <el-input
            class="cell-input"
            type="text"
            placeholder="请输入内容"
            v-model.trim.lazy="renameText"
            maxlength="100"
            show-word-limit
            ref="input"
            size="small"
            resize="horizontal"
            onfocus="this.select()"
            style="width: 300px"
            @keyup.enter.native="cellTextChecked(scope.row)"
            @keyup.esc.native="cellTextClose"
          >
            <el-button
              slot="append"
              icon="el-icon-check"
              @click="cellTextChecked(scope.row)"
              class="check"
            ></el-button>
            <el-button
              slot="append"
              icon="el-icon-close"
              @click="cellTextClose"
              class="uncheck"
            ></el-button>
          </el-input>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="200"
      :formatter="dateFormatter"
    >
    </el-table-column>
    <el-table-column
      prop="size"
      label="大小"
      :formatter="sizeFormatter"
      width="auto"
      sortable
    >
    </el-table-column>
    <el-table-column
      prop="duration"
      label="时长"
      width="auto"
      sortable
      :formatter="durationFormatter"
    >
    </el-table-column>
    <el-table-column prop="more" label="更多" width="80">
      <template v-slot="scope">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            操作<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              command="rename"
              @click.native="handleRename(scope.$index, scope.row)"
            >
              重命名
            </el-dropdown-item>

            <el-dropdown-item
              command="delete"
              @click.native="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-dropdown-item>
            <el-dropdown-item
              @click.native="handleDownload(scope.$index, scope.row)"
            >
              下载
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "VideoTable",
  data() {
    return {
      tableData: [],
      renameIndex: -1,
      renameText: "",
      nameCellWidth: ["auto", "300"],
    };
  },
  methods: {
    durationFormatter(row, col) {
      return `${row.duration} min`;
    },
    sizeFormatter(row, col) {
      return `${row.size} M`;
    },
    dateFormatter(row, col) {
      return row.created;
    },
    tableRowStyle({ row, rowIndex }) {
      return { height: "auto" };
    },
    tableHeaderStyle({ row, rowIndex }) {
      return { height: "auto" };
    },
    // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return {};
      }
    },
    handleRename(index, { title }) {
      this.renameIndex = index;
      this.renameText = title;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    async handleDelete(index, { id }) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const { data, status } = await this.$http.delete(
            "/video_info/" + `${id}`
          );
          this.getAllTableData();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleDownload(index, scope) {},
    getNameCellWidth() {
      return this.renameIndex === -1 ? 0 : 1;
    },
    async cellTextChecked(row) {
      try {
        const { data, status } = await this.$http.post(
          "/video_info/" + `${row.id}`,
          {
            title: this.renameText,
          }
        );
        if (status === 200) {
          this.renameIndex = -1;
          this.getAllTableData();
        } else if (status === 406) {
          this.$message({
            showClose: true,
            message: data.message,
            type: "error",
          });
        }
      // eslint-disable-next-line no-empty
      } catch (error) {}
    },
    cellTextClose() {
      this.renameIndex = -1;
      this.renameText = "";
    },
    async getAllTableData() {
      const { data: res } = await this.$http.get("/video_info");
      this.tableData = res;
    },
  },
  created() {
    this.getAllTableData();
  },
};
</script>
<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.cell-input {
  .check:hover {
    background-color: #5cbb7a;
    color: #fff;
  }
  .uncheck:hover {
    background-color: #f56c6c;
    color: #fff;
  }
}
</style>