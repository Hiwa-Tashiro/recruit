import { I18n } from 'aws-amplify/utils';
//認証の英語を日本語化する辞書
const dict = {
  ja: {
        'Sign in': 'サインイン',
        'Sign In': 'サインイン',
        'Sign up': 'サインアップ',
        'Sign out': 'サインアウト',
        'Sign in to your account': 'アカウントにサインイン',
        'Signing in': 'サインイン中',
        'Send code': 'コード送信',
        'Sending': 'コード送信中',
        'Submitting': 'コード送信中',
        'Username': 'ユーザー名',
        'Password': 'パスワード',
        'Email': 'メールアドレス',
        'Enter your Username': 'ユーザー名を入力してください',
        'Enter your Password': 'パスワードを入力してください',
        'Enter your Email': 'メールアドレスを入力してください',
        'Your passwords must match': 'パスワードが間違っています',
        'Changing': '変更中',
        'Reset Password': 'パスワードのリセット',
        'Confirm Password': 'パスワード確認',
        'Please confirm your Password': 'パスワードを再入力してください',
        'Password must have at least 8 characters': 'パスワードは8文字以上で作成してください',
        'Code': 'コード',
        'Code *': 'コード *',
        'Verify': 'コード送信',
        'Invalid verification code provided, please try again.':'コードが違います、もう一度入力してください。',
        'Verifying': 'コード送信中',
        'Attempt limit exceeded, please try after some time.':'送信上限を超過しました。後ほどお試しください。',
        'Account recovery requires verified contact information':'メールアドレスを認証してください',
        'Enter your username': '名前を入力してください',
        'No account?': 'アカウントが未登録ですか？',
        'Forgot your password?': 'パスワードをお忘れですか？',
        'Reset password': 'パスワードをリセット',
        'User does not exist': 'ユーザーが存在しません',
        'User already exists': 'ユーザーは既に存在します',
        'Incorrect username or password.': 'ユーザー名またはパスワードが違います',
        'Invalid password format': 'パスワードのフォーマットが不正です',
        'Create account': 'アカウントを作成',
        'Forgot Password': 'パスワードを忘れた',
        'Change Password': 'パスワードを変更',
        'New Password': '新しいパスワード',
        'Phone Number': '電話番号',
        'Confirm a Code': 'コードを確認',
        'Confirm Sign In': 'サインインを確認',
        'Confirm Sign up': 'サインアップを確認',
        'Back to Sign In': 'サインインに戻る',
        'Send Code': 'コードを送信',
        'Confirm': '確認',
        'Resend Code': 'コードを再送',
        'Submit': '送信',
        'Skip': 'スキップ',
        'Verify Contact': '連絡先を検証',
        'Confirmation Code': '確認コード',
        'Lost your code?': 'コードがありませんか？',
        'Invalid phone number format': '不正な電話番号フォーマットです。 電話番号は次のフォーマットで入力してください: +12345678900',
        'Create Account': 'アカウントを作成',
        'Have an account?': 'アカウントをお持ちですか？',
        'Create a new account': '新しいアカウントを作成',
        'Reset your password': 'パスワードをリセット',
        'An account with the given email already exists.': 'そのメールアドレスは既に存在します',
        'Username cannot be empty': 'ユーザー名は必須です',
        'Password attempts exceeded': 'パスワード試行回数が超過しました',
  },
};

I18n.putVocabularies(dict);
I18n.setLanguage('ja');