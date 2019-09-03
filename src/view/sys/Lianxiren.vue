<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item>客户管理</el-breadcrumb-item>
			<el-breadcrumb-item>客户信息管理</el-breadcrumb-item>
			<el-breadcrumb-item>联系人</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 搜索筛选 -->
		<el-form :inline="true" class="usercheBox" align="right">
			<el-form-item>
				<el-button size="mini" type="primary" plain class="el-icon--right" @click="doSetAddMergeForm">新建</el-button>
				<el-button size="mini" type="primary" plain class="el-icon--right" @click="aaa">返回</el-button>
			</el-form-item>
		</el-form>

		<template>
			<el-form :date="fz" :model="fz" :ref="fz">
				<table width="100%" height="40px">
					<tr>
						<td width="100px" class="biankuang">客户编号</td>
						<td>
							<el-input v-model="custNo" placeholder="该编号由系统生成" :disabled="true">
							</el-input>
						</td>
						<td width="100px" class="biankuang">客户名称</td>
						<td>
							<el-input v-model="custName" :disabled="true" placeholder="请输入名称">
							</el-input>
						</td>
					</tr>
				</table>
			</el-form>
			<p></p>
			<template>
				<el-table :data="result" border style="width: 100%" max-height="500">
					<el-table-column type="index" label="序" :index="indexMethod" min-width="10" align="center">
					</el-table-column>
					<!-- <el-table-column prop="bookId" label="ID" min-width="10" align="center">
							</el-table-column> -->
					<el-table-column prop="lkmName" label="姓名" min-width="30">
					</el-table-column>
					<el-table-column prop="lkmSex" label="性别" min-width="60">
					</el-table-column>
					<el-table-column prop="lkmPostion" label="职位" min-width="60">
					</el-table-column>
					<el-table-column prop="lkmTel" label="办公电话" min-width="60">
					</el-table-column>
					<el-table-column prop="lkmMobile" label="手机" min-width="60">
					</el-table-column>
					<el-table-column prop="lkmMemo" label="备注" min-width="60">
					</el-table-column>

					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
							<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				</el-dialog>
			</template>
			<!-- 分页 -->
			</el-dialog>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'kehuxinxi',
		data: function() {
			return {
				lzsz: null,
				queryForm: {
					lkmID: null,
					lkmCustNo: null,
					lkmCustName: null,
					lkmName: null,
					lkmSex: null,
					lkmPostion: null,
					lkmTel: null,
					lkmMobile: null,
					lkmMemo: null,
					page: 1,
					rows: 10,
					total: 0
				},
				fz: [],
				result: [],
				dialogFormVisible: false,
				labelPosition: 'left',
				mergeForm: {
					lkmID: null,
					lkmCustNo: null,
					lkmCustName: null,
					lkmName: null,
					lkmSex: null,
					lkmPostion: null,
					lkmTel: null,
					lkmMobile: null,
					lkmMemo: null
				},
				fz: {
					fz: []
				},
				doSetMergeForm: function() {
					this.$refs['fz'].resetFields();
					this.fz.custNo = null;
					this.fz.custName = null;
				}
			}
		},
		methods: {
			indexMethod(index) {
				return (this.queryForm.page - 1) * this.queryForm.rows + (index + 1);
			},
			handleDelete: function(index, row) {
				console.log('handleDelete');
				this.$confirm('您确定要删除此条记录吗, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					let url = this.axios.urls.SYS_Lianxiren_Del;
					this.axios.post(url, {
						lkmID: row.lkmID
					}).then((resp) => {
						this.$message({
							message: resp.data.message,
							type: 'success'
						});
						this.search();
					}).catch((error) => {});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			aaa: function() {
				this.$router.push({
					path: '/sys/KehuxinxiUp'
				})
			},
			handleEdit: function(row) {
				this.$store.commit('setLEdit', {
					lkmID: row.lkmID
				});
				this.$router.push({
					path: '/sys/LianxirenUp',
				})
			},
			handleDialogClose: function() {
				this.doSetMergeForm();
			},
			doSetAddMergeForm: function() {
				this.$router.push({
					path: '/sys/LianxirenAdd'
				})
				this.dialogTitle = '文章添加';
			},
			search: function() {
				let url = this.axios.urls.SYS_Lianxiren_LIST;
				this.axios.post(url, this.queryForm).then((resp) => {
					this.result = resp.data.list;
				}).catch((error) => {});
			},
		},
		created: function() {
			this.search();
		},
		computed: {
			custNo: function() {
				return this.$store.getters.result;
			},
			custName: function() {
				return this.$store.getters.custName;
			}
		},
	}
</script>

<style scoped>
	.usercheBox {
		margin-top: 20px;
	}

	.userRole {
		width: 100%;
	}

	.biankuang {
		background-color: cornflowerblue;
		font-size: 12px;
		text-align: center;
	}

	.beijing {
		background-color: cadetblue;
	}

	table {
		width: 100%;
		background: #EFEEFE;
	}
</style>
