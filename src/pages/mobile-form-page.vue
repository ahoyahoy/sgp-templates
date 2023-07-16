<script setup>
// import BoxImg from '../../img/drag-box.png'
import LogoImg from '../../img/logo-lite.svg'
</script>

<template>
    <div class="helper-row">
        <div class="helper-containers mobile-s">
            <div class="helper-container">
                <div class="modal-detail welcome-page">
                    <div class="header">
                        <div class="logo-container">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"
                        style="width: 0%;" :aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="body">
                        <p class="welcome">Welcome to</p>
                        <h1 class="title">First test form</h1>
                        <p class="subtitle">Please complete the following 2 questions. <br> It won't take you more than 3 minutes.</p>
                    </div>
                    <div class="footer">
                        <BaseButton block>
                            Start
                        </BaseButton>
                    </div>
                </div>
            </div>
            <div class="helper-container">
                <div class="modal-detail first-step">
                    <div class="header">
                        <div class="logo-container">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                        <div class="steps">0 of 2 done</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"
                        style="width: 0%;" :aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="body">
                        <div class="body-header">
                            <div class="required-box">
                                <p>01</p>
                                <p class="required">Required</p>
                            </div>
                            <div class="title-box">
                                <h1 class="title">What is your name?</h1>
                                <p class="subtitle">Type your First and Last name.</p>
                            </div>
                        </div>
                        <TextInput type="full" />
                        <div class="img-box">
                            <img src="../../img/drag-box.png" alt="" />
                        </div>
                    </div>
                    <div class="footer">
                        <BaseButton type="none" block disable>
                            Next
                        </BaseButton>
                    </div>
                </div>
            </div>
            <div class="helper-container">
                <div class="modal-detail second-step">
                    <div class="header">
                        <div class="logo-container">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                        <div class="steps">1 of 2 done</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"
                        style="width: 50%;" :aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="body">
                        <div class="body-header">
                            <div class="required-box">
                                <p>02</p>
                                <p class="required">Required</p>
                            </div>
                            <div class="title-box">
                                <h1 class="title">What year were you born?</h1>
                                <p class="subtitle">Enter in DD/MM/YYYY</p>
                            </div>
                        </div>
                        <TextInput type="full" />
                    </div>
                    <BoxRow class="footer" kind="secondary">
                        <BaseButton type="outline">
                            Back
                        </BaseButton>
                        <BaseButton>
                            Finish
                        </BaseButton>
                    </BoxRow>
                </div>
            </div>
            <div class="helper-container">
                <div class="modal-detail thanks-page">
                    <div class="header">
                        <div class="logo-container">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                        <div class="steps">2 of 2 done</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"
                        style="width: 100%;" :aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="body">
                        <h1 class="title">Thank you for your answers!</h1>
                        <p class="subtitle">All answers have been sent successfully. <br> You can close browser window now.</p>
                    </div>
                    <div class="footer">
                        <BaseButton type="outline" block>
                            Close browser window
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="helper-containers mobile-l">
            <div class="helper-container">
                <div class="modal-detail welcome-page">
                    <div class="header">
                        <div class="logo-container">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"
                        style="width: 0%;" :aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="body">
                        <p class="welcome">Welcome to</p>
                        <h1 class="title">First test form</h1>
                        <p class="subtitle">Please complete the following 2 questions. <br> It won't take you more than 3 minutes.</p>
                    </div>
                    <div class="footer">
                        <BaseButton block>
                            Start
                        </BaseButton>
                    </div>
                </div>
            </div>
            <div class="helper-container">
                <div class="modal-detail first-step">
                    <div class="header">
                        <div class="logo-container">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                        <div class="steps">0 of 2 done</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"
                        style="width: 0%;" :aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="body">
                        <div class="body-header">
                            <div class="required-box">
                                <p>01</p>
                                <p class="required">Required</p>
                            </div>
                            <div class="title-box">
                                <h1 class="title">What is your name?</h1>
                                <p class="subtitle">Type your First and Last name.</p>
                            </div>
                        </div>
                        <TextInput type="full" />
                        <div class="img-box">
                            <img src="../../img/drag-box.png" alt="" />
                        </div>
                    </div>
                    <div class="footer">
                        <BaseButton type="none" block disable>
                            Next
                        </BaseButton>
                    </div>
                </div>
            </div>
            <div class="helper-container">
                <div class="modal-detail second-step">
                    <div class="header">
                        <div class="logo-container">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                        <div class="steps">1 of 2 done</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"
                        style="width: 50%;" :aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="body">
                        <div class="body-header">
                            <div class="required-box">
                                <p>02</p>
                                <p class="required">Required</p>
                            </div>
                            <div class="title-box">
                                <h1 class="title">What year were you born?</h1>
                                <p class="subtitle">Enter in DD/MM/YYYY</p>
                            </div>
                        </div>
                        <TextInput type="full" />
                    </div>
                    <BoxRow class="footer" kind="secondary">
                        <BaseButton type="outline">
                            Back
                        </BaseButton>
                        <BaseButton>
                            Finish
                        </BaseButton>
                    </BoxRow>
                </div>
            </div>
            <div class="helper-container">
                <div class="modal-detail thanks-page">
                    <div class="header">
                        <div class="logo-container">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                        <div class="steps">2 of 2 done</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"
                        style="width: 100%;" :aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="body">
                        <h1 class="title">Thank you for your answers!</h1>
                        <p class="subtitle">All answers have been sent successfully. <br> You can close browser window now.</p>
                    </div>
                    <div class="footer">
                        <BaseButton type="outline" block>
                            Close browser window
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="helper-containers tablet">
            <div class="helper-container">
                <div class="modal-detail welcome-page">
                    <div class="header">
                        <div class="logo-container">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"
                        style="width: 0%;" :aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="body">
                        <p class="welcome">Welcome to</p>
                        <h1 class="title">First test form</h1>
                        <p class="subtitle">Please complete the following 2 questions. <br> It won't take you more than 3 minutes.</p>
                    </div>
                    <div class="footer">
                        <BaseButton block>
                            Start
                        </BaseButton>
                    </div>
                </div>
            </div>
            <div class="helper-container">
                <div class="modal-detail first-step">
                    <div class="header">
                        <div class="logo-container">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                        <div class="steps">0 of 2 done</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"
                        style="width: 0%;" :aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="body">
                        <div class="body-header">
                            <div class="required-box">
                                <p>01</p>
                                <p class="required">Required</p>
                            </div>
                            <div class="title-box">
                                <h1 class="title">What is your name?</h1>
                                <p class="subtitle">Type your First and Last name.</p>
                            </div>
                        </div>
                        <TextInput type="full" />
                        <div class="img-box">
                            <img src="../../img/drag-box.png" alt="" />
                        </div>
                    </div>
                    <div class="footer">
                        <BaseButton type="none" block disable>
                            Next
                        </BaseButton>
                    </div>
                </div>
            </div>
            <div class="helper-container">
                <div class="modal-detail second-step">
                    <div class="header">
                        <div class="logo-container">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                        <div class="steps">1 of 2 done</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"
                        style="width: 50%;" :aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="body">
                        <div class="body-header">
                            <div class="required-box">
                                <p>02</p>
                                <p class="required">Required</p>
                            </div>
                            <div class="title-box">
                                <h1 class="title">What year were you born?</h1>
                                <p class="subtitle">Enter in DD/MM/YYYY</p>
                            </div>
                        </div>
                        <TextInput type="full" />
                    </div>
                    <BoxRow class="footer" kind="secondary">
                        <BaseButton type="outline">
                            Back
                        </BaseButton>
                        <BaseButton>
                            Finish
                        </BaseButton>
                    </BoxRow>
                </div>
            </div>
            <div class="helper-container">
                <div class="modal-detail thanks-page">
                    <div class="header">
                        <div class="logo-container">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                        <div class="steps">2 of 2 done</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"
                        style="width: 100%;" :aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="body">
                        <h1 class="title">Thank you for your answers!</h1>
                        <p class="subtitle">All answers have been sent successfully. <br> You can close browser window now.</p>
                    </div>
                    <div class="footer">
                        <BaseButton type="outline" block>
                            Close browser window
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    font-size: var(--size-text-medium);
}
.helper-row {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
}
.helper-containers {
    display: flex;
    align-items: center;
    height: 100vh;
    overflow: scroll;
    background-color: #F5F5F5;
    gap: 45px;
    padding: 0 2em;

}

.mobile-s .helper-container {
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 762px;
    flex: 0 0 320px;
}
.mobile-l .helper-container {
    display: flex;
    flex-direction: column;
    width: 425px;
    height: 762px;
    flex: 0 0 425px;
}
.tablet .helper-container {
    display: flex;
    flex-direction: column;
    width: 768px;
    height: 762px;
    flex: 0 0 768px;
}

.modal-detail {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    border-left: 1px solid var(--color-grey-lighten-4);
    min-height: 450px;
    background: var(--color-purple-lighten-5);
}

.header {
    display: flex;
    flex: 0 0 36px;
    align-items: center;
    padding: var(--spacing-3);
    background-color: var(--color-white-base);
}

.logo-container {
    display: flex;
    flex: 1;
}
.logo {
  width: 95px;
  height: 16px;
}

.steps {
    color: var(--color-grey-lighten-2);
    line-height: var(--line-hight-2);
}
.progress {
    height: 2px;
    background-color: var(--color-grey-lighten-4);
}
.progress-bar {
    height: 100%;
    white-space: nowrap;
    background-color: var(--color-purple-base);
}

.body {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
}

.body-header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
}
.welcome-page .body,
.thanks-page .body {
    gap: var(--spacing-3);
    align-items: center;
    margin-top: 144px;
}

.first-step .body,
.second-step .body {
    padding: var(--spacing-4);
    gap: var(--spacing-5);
}
.tablet .first-step .body,
.tablet .second-step .body {
    padding: var(--spacing-4) var(--spacing-6);
}

.welcome-page .welcome {
    color: var(--color-grey-lighten-2);
    font-size: var(--size-text-small);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-1);
    letter-spacing: 1.2px;
    text-transform: uppercase;
}
.welcome-page .title,
.thanks-page .title {
    font-size: var(--size-h1);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-3);
}
.welcome-page .subtitle,
.thanks-page .subtitle {
    color: var(--color-grey-lighten-2);
    line-height: var(--line-hight-2);
    text-align: center;
}

.required-box {
    display: flex;
    justify-content: space-between;
    line-height: var(--line-hight-1);
}
.required {
    display: flex;
    color: var(--color-grey-lighten-2);
}

.title-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-0);
}
.first-step .title,
.second-step .title {
font-size: var(--size-h3);
font-weight: var(--font-weight-semibold);
line-height: var(--spacing-5);
}
.first-step .subtitle,
.second-step .subtitle {
    color: var(--color-grey-lighten-2);
font-weight: 400;
line-height: var(--line-hight-2);
}
.img-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-white-base);
    padding: var(--spacing-3);
    border-radius: var(--border-radius-3);
    border: 1px solid var(--color-grey-lighten-3);
}
.first-step img {
    width: 100%;
    height: auto;
}
.footer {
    display: flex;
    gap: var(--spacing-3);
    flex: 0 0 68px;
    height: 68px;
    align-items: center;
    border-top: 1px solid var(--color-divider);
    padding: 0 var(--spacing-3);
    background-color: var(--color-white-base);
}

</style>
