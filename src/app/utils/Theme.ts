/**
 * Theme
 * @author guobin201314@gmail.com on 2019-03-01
 */
export function changeThemes(name: 'indigo-pink-theme' | 'work7-dark-theme' | '') {
  if (document.body.className !== name) {
    document.body.setAttribute('class', name);
  }
}
