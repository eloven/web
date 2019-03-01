/**
 * Theme
 * @author guobin201314@gmail.com on 2019-03-01
 */
export function changeTheme(name: string) {
  if (document.getElementsByTagName('body')[0].className !== name) {
    document.getElementsByTagName('body')[0].className = name;
  }
}
