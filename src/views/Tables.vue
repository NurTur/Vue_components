<template>
    <Table
        :tableData="tableData"
        :stripe="true"
        :border="false"
    >
        <el-table-column
            prop="check"
            label="№"
            width="auto"
        >
            <template slot-scope="scope">
                <CheckBox :text="scope.row.label" :checked="scope.row.check"/>
            </template>
        </el-table-column>

        <el-table-column
            sortable
            prop="name"
            label="Name"
            width="auto"
        >
            <template slot-scope="scope">
                <div style="display: flex; flex-direction: row; align-items: center;" >
                <Avatar
                    size='small'
                    src='http://192.168.102.87/ForDesigner/img/avatar.jpg?17030'
                    />{{scope.row.name}}
                </div>
            </template>
        </el-table-column>

        <el-table-column
            sortable
            prop="address"
            label="Address"
            width="auto"
        >
        </el-table-column>

        <el-table-column
            prop="active"
            label="Active"
            width="auto"
        >
            <template slot-scope="scope">
                <Label
                :type="scope.row.active === 'Активный' ? 'success' : 'danger'"
                :text='scope.row.active'
                />
            </template>
        </el-table-column>

        <el-table-column
            prop="icons"
            label=""
            width="auto"
        >
        <template>
            <i class="el-icon-ic_add_circle"></i>
            <i class="el-icon-ic_edit"></i>
            <i class="el-icon-ic_delete"></i>
        </template>
        </el-table-column>

        <el-table-column
            prop="addIcons"
            label="Active"
            width="auto"
        >
            <template>
            <i class="el-icon-delete-solid"></i>
            <i class="el-icon-fa-unlock"></i>
            </template>
        </el-table-column>
  </Table>
</template>

<script>
import Label from '@/components/Label.vue';
import Avatar from '@/components/Avatar.vue';
import Table from '@/components/Table.vue';
import CheckBox from '@/components/Inputs/CheckBox.vue';

export default {
  name: 'tables',
  components: {
    Label, Avatar, Table, CheckBox,
  },
  data() {
    return {
      tableData: [{
        check: true,
        label: 22,
        name: 'Иван',
        date: '2016-05-03',
        address: 'No. 189, Grove St, Los Angeles3',
        active: 'Активный',
        icons: 'icons',
        addIcons: 'addIcons',
      }, {
        check: false,
        label: 66,
        name: 'Костя',
        date: '2016-05-02',
        address: 'No. 189, Grove St, Los Angeles2',
        active: 'Отключен',
        icons: 'icons',
        addIcons: 'addIcons',
      }, {
        check: true,
        label: 28,
        name: 'Арман',
        date: '2016-05-04',
        address: 'No. 189, Grove St, Los Angeles4',
        active: 'Активный',
        icons: 'icons',
        addIcons: 'addIcons',
      }, {
        check: false,
        label: 18,
        name: 'Кайрат',
        date: '2016-05-01',
        address: 'No. 189, Grove St, Los Angeles1',
        active: 'Активный',
        icons: 'icons',
        addIcons: 'addIcons',
      }],
    };
  },

};
</script>
