<template>
  <div>
    <h3>Inputs </h3>
    <el-row>
      <el-col :md="6" style="margin-left:60px">
        <Input
            label='Lable title'
            type='password'
            hover='off'
        />
      </el-col>
      <el-col :md="6" style="margin-left:60px">
        <Input
            label='Lable title'
            placeholder='Placeholder'
            type='text'
            effects='off'
        />
      </el-col>
      <el-col :md="6" style="margin-left:60px">
        <Input
            label='Search Users'
            placeholder='User Name'
            type='text'
            autocomplete='off'
        />
      </el-col>
    </el-row>
    <br/>
    <h3>Input Textarea type-1</h3>
    <el-row>
      <el-col :md="6" style="margin-left:60px">
        <Textarea/>
       </el-col>
      <el-col :md="6" style="margin-left:60px">
        <Textarea
          redBorder='on'
          hover='off'
        />
      </el-col>
      <el-col :md="6" style="margin-left:60px">
        <Textarea
          effects='off'
          :readonly='true'
        />
      </el-col>
    </el-row>

<br/><br/>
    <h3>Input Textarea type-2</h3>
    <el-row>
      <el-col :md="4" style="margin-left:60px">
        <Textarea
            :border='true'
        />
       </el-col>
      <el-col :md="4" style="margin-left:60px">
        <Textarea
          redBorder='on'
          hover='off'
          :border='true'
        />
      </el-col>
      <el-col :md="4" style="margin-left:60px">
        <Textarea
          effects='off'
          :readonly='true'
          :border='true'
        />
      </el-col>
      <el-col :md="4" style="margin-left:60px">
        <Textarea
          effects='off'
          hover='off'
          redBorder='off'
          :border='true'
        />
      </el-col>
    </el-row>

    <br/><br/>
    <h3>Input Search</h3>
    <el-row>
      <el-col :md="6" style="margin-left:60px">
        <InputSearch
          placeholder='Placeholder'
        />
      </el-col>
      <el-col :md="6" style="margin-left:60px">
        <InputSearch
        placeholder='Placeholder'
        redBorder='on'
        hover='off'
        />
      </el-col>
      <el-col :md="6" style="margin-left:60px">
        <InputSearch
          placeholder='Placeholder'
          hover='off'
        />
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Input from '@/components/Inputs/Input.vue';
import Textarea from '@/components/Inputs/Textarea.vue';
import InputSearch from '@/components/Inputs/InputSearch.vue';

export default {
  name: 'Inputs',
  components: {
    Input, Textarea, InputSearch,
  },
};
</script>
