//
// Copyright © 2020 Anticrm Platform Contributors.
// 
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// 
// See the License for the specific language governing permissions and
// limitations under the License.
//

import StringEditor from './components/StringEditor.svelte'
import StringPresenter from './components/StringPresenter.svelte'
import StatePresenter from './components/StatePresenter.svelte'
import TableView from './components/TableView.svelte'

export default async () => ({
  component: {
    StringEditor,
    StringPresenter,
    StatePresenter,
    TableView
  },
})
