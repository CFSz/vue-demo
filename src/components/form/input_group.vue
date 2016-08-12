<template name="input_group">
    <div class="form-group">
        <label class="col-lg-2 control-label">{{item.label}}</label>

        <div class="col-lg-10 input-container">
            <input {{item.required}} name="{{item.key}}" type="text" data-type="{{_type}}" value="{{item.value}}"
                   class="form-control" placeholder="请输入{{label}}..."
                   oninvalid="setCustomValidity('请填写{{label}}')" oninput="setCustomValidity('')">
        </div>
    </div>
</template>

<script>
    import Demo from './Demo.vue'
    export default{
        props: {
            item: Object
        }
        ,components: {
            Demo
        }
    }
</script>

<style lang="less">
    @import "style"
</style>