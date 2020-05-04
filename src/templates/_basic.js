export default `
<div class="container">
    <div class="row">        
        <div title="برای ثبت تست  ها حداقل انتخاب 10 تست الزامی است" style="display: inline-block">
            <button  class="btn btn-green test-register" disabled id="test-register">ثبت سوالات</button>
            <span class="hide-in-desktop text_small ten-requierd" style="color: red">
                برای ثبت تست  ها حداقل انتخاب 10 تست الزامی است
            </span>
        </div>
        <div class="hide-in-desktop hide-in-tablet" style="width: 20%">
            <div class="btn-group btn-block" role="group">
                <button type="button" class="btn btn-blue"><i class="far fa-file-alt"></i></button>
                <button class="btn btn-lightblue" disabled id="test-register"><i class="fas fa-tasks"></i></button>
            </div>
        </div>
    </div>
    <div class="row">
        <div id='question' class="desktop-col-6 tablet-col-6 phablet-col-12 phone-col-12">
            <div class="accordion"></div>
        </div>
        <div id='selected' class="desktop-col-6 tablet-col-6 hide-in-phone hide-in-phablet"></div>
    </div>
    
</div>
`;
