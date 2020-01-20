<template>
  <div class="home">
    <div class="button-wrap">
      <Button text="Primary" size="medium" />
      <br />
      <br />
      <Button text="Disabled Primary" size="medium" :disabled="true" />
      <br />
      <br />
      <Button text="loading Primary" size="medium" :loading="true" :disabled="true" />
    </div>

    <div class="button-wrap">
      <Button text="Info" size="medium" buttonType="info" />
      <br />
      <br />
      <Button text="Disabled Info" size="medium" :disabled="true" buttonType="info" />
      <br />
      <br />
      <Button
        text="loading Info"
        size="medium"
        :loading="true"
        :disabled="true"
        buttonType="info"
      />
    </div>

    <div class="button-wrap">
      <Button text="Primary" size="small" />
      <br />
      <br />
      <Button text="Disabled Primary" size="small" :disabled="true" />
      <br />
      <br />
      <Button text="loading Primary" size="small" :loading="true" :disabled="true" />
    </div>

    <div class="button-wrap">
      <Button text="Info" size="small" buttonType="info" />
      <br />
      <br />
      <Button text="Disabled Info" size="small" :disabled="true" buttonType="info" />
      <br />
      <br />
      <Button
        text="loading Info"
        size="small"
        buttonType="info"
        :loading="true"
        :disabled="true"
      />
    </div>

    <div class="button-wrap">
      <Button text="Primary" size="small" icon="el-icon-s-claim" />
      <br />
      <br />
      <Button
        text="Disabled Primary"
        size="small"
        :disabled="true"
        icon="el-icon-error"
      />
    </div>
    <div class="button-wrap">
      <Button text="Primary" size="small" icon="el-icon-s-claim" buttonType="info" />
      <br />
      <br />
      <Button
        text="Disabled Primary"
        size="small"
        :disabled="true"
        buttonType="info"
        icon="el-icon-error"
      />
    </div>

    <div class="button-wrap">
      <DownloadButton
        text="XLS"
        tooltipText='Download xls file'
        buttonType="info"
        icon="el-icon-document"
      />
      <br />
      <br />
      <DownloadButton
        text="XLS"
        tooltipText='Download xls file'
        buttonType="info"
        icon="el-icon-document"
        :loading="true"
        :disabled="true"
      />
    </div>
    <div class="button-wrap">
      <ActionButton
        tooltipText='add'
        icon="el-icon-circle-plus"
        hoverFontColor='green'
      />
      <br />
      <br />
      <ActionButton
        tooltipText='delete'
        icon="el-icon-delete-solid"
        hoverFontColor='red'
      />
      <br />
      <br />
      <ActionButton
        tooltipText='success'
        icon="el-icon-success"
        hoverFontColor='green'
      />
      <br />
      <br />
       <ActionButton
        tooltipText='send'
        icon="el-icon-s-promotion"
        hoverFontColor='blue'
      />
    </div>

    <div class="button-wrap">
      <LinkButton
        text='Добавить условие'
        icon="el-icon-plus"
      />
      <br />
      <br />
      <LinkButton
        text='Добавить условие'
        icon="el-icon-plus"
        :active='true'
      />
    </div>
    <div class="button-wrap">
      <FilterButton
      />
      <br />
      <br />
      <FilterButton
        :active='true'
      />
      <br />
      <br />
      <SelectButton
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Buttons/Button.vue';
import DownloadButton from '@/components/Buttons/DownloadButton.vue';
import ActionButton from '@/components/Buttons/ActionButton.vue';
import LinkButton from '@/components/Buttons/LinkButton.vue';
import FilterButton from '@/components/Buttons/FilterButton.vue';
import SelectButton from '@/components/Buttons/SelectButton.vue';

export default {
  name: 'Buttons',
  components: {
    Button,
    DownloadButton,
    ActionButton,
    LinkButton,
    FilterButton,
    SelectButton,
  },
};
</script>

<style scoped>
.button-wrap {
  width: 50%;
  display: inline-block;
  margin-top: 100px;
}
</style>
